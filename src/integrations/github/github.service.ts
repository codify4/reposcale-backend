import { Injectable, Logger, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as jwt from 'jsonwebtoken';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
    private readonly logger = new Logger(GithubService.name);
    constructor(private readonly httpService: HttpService) {}

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

    async getInstallationByUsername(username: string) {
        const installations = await this.getInstallations();
        
        // Find installation for the specific user
        const userInstallation = installations.find(installation => 
            installation.account?.login === username
        );
        
        if (!userInstallation) {
            throw new NotFoundException(`GitHub App not installed for user: ${username}`);
        }
        
        return userInstallation;
    }

    async getAppAccessToken(username: string) {
        // First get the installation for this user
        const installation = await this.getInstallationByUsername(username);
        
        // Then get the access token for this installation
        return this.getInstallationAccessToken(installation.id);
    }

    async handleInstallationCallback(code: string, state?: string) {
        // This method would handle the installation callback
        // You might want to store the installation info or redirect the user
        this.logger.log(`Installation callback received with code: ${code}, state: ${state}`);
        
        // After installation, you can get the installation info
        const installations = await this.getInstallations();
        return {
            success: true,
            installations,
            message: 'GitHub App installed successfully'
        };
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
