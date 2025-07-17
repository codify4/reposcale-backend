import { Injectable, Logger, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as jwt from 'jsonwebtoken';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRepoDto } from './dto/create-repo.dto';

@Injectable()
export class GithubService {
    private readonly logger = new Logger(GithubService.name);
    constructor(
        private readonly httpService: HttpService, 
        private readonly prisma: PrismaService
    ) {}

    async getInstallationUrl(userId: number){
        const state = jwt.sign(
            { userId },
            process.env.GITHUB_APP_STATE_SECRET,
            { expiresIn: '10m' }
        );
        const installationUrl = `https://github.com/apps/reposcale/installations/select_target?state=${state}`;
        return {
            url: installationUrl,
            message: 'Redirect to this URL to authorize the GitHub App'
        };
    }

    async handleInstallationCallback(installationId: string, state: string) {
        const decodedState = jwt.verify(state, process.env.GITHUB_APP_STATE_SECRET);
        const userId = Number(decodedState.userId);

        const token = await this.getInstallationAccessToken(Number(installationId));
        if(!token) {
            throw new BadRequestException('Failed to get installation access token');
        }

        const installation = await this.prisma.githubInstallation.findUnique({
            where: {
                installationId,
            }
        })
        if(installation) {
            return {
                success: true,
                message: 'Installation already exists',
                installation
            }
        }

        const newInstallation = await this.prisma.githubInstallation.create({
            data: {
                installationId,
                userId,
                permissions: token.permissions,
                repositorySelection: token.repository_selection
            }
        })
        if(!newInstallation) {
            throw new BadRequestException('Failed to create installation'); 
        }

        return {
            success: true,
            message: 'Installation callback handled successfully',
            installation: newInstallation
        }
    }

    async getInstallationAccessToken(installationId: number) {
        const appJwt = this.generateAppJwt();

        try {
            const tokenResponse = await firstValueFrom(this.httpService.post(
                `https://api.github.com/app/installations/${installationId}/access_tokens`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${appJwt}`,
                        Accept: 'application/vnd.github+json',
                    },
                }
            ));
            
            if (tokenResponse.status !== 201) {
                this.logger.error('GitHub response:', tokenResponse.data);
                throw new UnauthorizedException('Failed to get installation access token');
            }
            
            this.logger.log(`Successfully generated access token for installation ${installationId}`);
            return tokenResponse.data;
        } catch (error) {
            this.logger.error(`Failed to get access token for installation ${installationId}`, error?.response?.data || error.message);
            throw new UnauthorizedException('Failed to get installation access token');
        }
    }

    async getRepos(userId: number) {
        const installation = await this.getUserInstallation(userId);
        const token = await this.getInstallationAccessToken(Number(installation.installationId));
    
        const repos = await firstValueFrom(this.httpService.get(
            `https://api.github.com/installation/repositories`,
            {
                headers: {
                    Authorization: `Bearer ${token.token}`,
                    Accept: 'application/vnd.github+json',
                },
            }
        ));

        if(!repos) {
            this.logger.error('No repos found for user', repos);
            throw new NotFoundException('No repos found for user');
        }

        const privateRepos = repos.data.repositories.filter((repo: any) => repo.private);  

        return privateRepos;
    }

    async listRepos(userId: number) {
        const installation = await this.getUserInstallation(userId);
        
        const repos = await this.prisma.repository.findMany({
            where: {
                installationId: installation.installationId
            }
        })

        return {
            success: true,
            message: 'Repos listed successfully',
            data: repos
        };
    }

    async createSingleRepo(createRepoDto: CreateRepoDto) {
        const repo = await this.prisma.repository.create({
            data: createRepoDto
        });

        if(!repo) {
            this.logger.error('Failed to create repo', repo);
            throw new BadRequestException('Failed to create repo');
        }

        return {
            success: true,
            message: 'Repo created successfully',
            data: repo
        };
    }

    async createRepos(createRepoDto: CreateRepoDto[]) {
        const repos = await this.prisma.repository.createMany({
            data: createRepoDto,
            skipDuplicates: true
        });

        if(!repos) {
            this.logger.error('Failed to create repos', repos);
            throw new BadRequestException('Failed to create repos');
        }

        return {
            success: true,
            message: 'Repos created successfully',
            data: repos
        };
    }

    async getRepo(owner: string, repo: string, path: string = "", userId: number) {
        const installation = await this.getUserInstallation(userId);
        const token = await this.getInstallationAccessToken(Number(installation.installationId));

        const res = await firstValueFrom(this.httpService.get(
            `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
            {
                headers: {
                    Authorization: `Bearer ${token.token}`,
                    Accept: 'application/vnd.github+json',
                },
            }
        ));

        if(res.status !== 200) {
            this.logger.error('Failed to get repo', res);
            return {
                success: false,
                message: 'Failed to get repo',
                data: res.data,
                status: res.status
            }
        }

        if (res.data.type === 'file' && res.data.content) {
            const content = Buffer.from(res.data.content, 'base64').toString('utf-8');
            return {
                ...res.data,
                content,
            };
        }

        return {
            success: true,
            message: 'Repo fetched successfully',
            data: res.data
        }
    }

    async getUserInstallation(userId: number) {
        const installations = await this.prisma.githubInstallation.findFirst({
            where: {
                userId,
            }
        })
        if(!installations) {
            throw new NotFoundException('No installation found for user');
        }
        return installations;
    }

    generateAppJwt() {
        const now = Math.floor(Date.now() / 1000);
        const payload = {
            iat: now,
            exp: now + 9 * 60,
            iss: process.env.GITHUB_APP_ID,
        };
        const privateKey = process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n');
        const appJwt = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
        return appJwt;
    }
}
