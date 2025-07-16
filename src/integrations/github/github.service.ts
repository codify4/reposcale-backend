import { Injectable, Logger, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as jwt from 'jsonwebtoken';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GithubService {
    private readonly logger = new Logger(GithubService.name);
    constructor(
        private readonly httpService: HttpService, 
        private readonly prisma: PrismaService
    ) {}

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

    async getInstallationUrl(state?: string) {
        let url = `https://github.com/apps/reposcale/installations/select_target`;
        return url;
    }

    async getInstallations() {
        const appJwt = this.generateAppJwt();

        try {
            const installationsResponse = await firstValueFrom(this.httpService.get(
                'https://api.github.com/app/installations',
                {
                    headers: {
                        Authorization: `Bearer ${appJwt}`,
                        Accept: 'application/vnd.github+json',
                    },
                }
            ));
            
            this.logger.log(`Found ${installationsResponse.data.length} installations`);
            return installationsResponse.data;
        } catch (error) {
            this.logger.error('Failed to get installations', error);
            throw new UnauthorizedException('Failed to get installations');
        }
    }

    async handleInstallationCallback(installationId: string, githubId: string) {
        const token = await this.getInstallationAccessToken(Number(installationId));

        await this.prisma.githubInstallation.create({
            data: {
                installationId,
                githubId,
                permissions: token.permissions,
                repositorySelection: token.repository_selection,
            }
        })
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
