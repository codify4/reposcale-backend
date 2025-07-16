import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { GetCurrentUser } from 'src/auth/common/decorators/get-current-user.decorator';
import { GithubService } from './github.service';
import { HttpService } from '@nestjs/axios';
import { Public } from 'src/auth/common/decorators/public.decorator';

@Controller('github')
export class GithubController {
    private readonly logger = new Logger(GithubController.name);
    constructor(private readonly githubService: GithubService, private readonly httpService: HttpService) {}

    @Get('installations')
    async getInstallations() {
        return this.githubService.getInstallations();
    }

    @Get('install')
    async redirectToInstallation(@GetCurrentUser('username') username: string) {
        const state = username;
        const installUrl = "https://github.com/apps/reposcale/installations/select_target"
        this.logger.log(`Installation URL: ${installUrl}`);
        
        return {
            url: installUrl,
            message: 'Redirect to this URL to authorize the GitHub App'
        };
    }

    @Public()
    @Get('app/callback')
    async handleGitHubAppCallback(
        @Query('installation_id') installationId: string,
        @Query('setup_action') setupAction: string,
        @Query('state') state: string
    ) {
        if (!installationId) {
            return {
                success: false,
                message: 'No installation_id provided. This is not a GitHub App installation callback.'
            };
        }

        try {
            const token = await this.githubService.getInstallationAccessToken(Number(installationId));
            return {
                success: true,
                installation_id: installationId,
                access_token: token,
                setupAction,
                state,
                message: 'GitHub App installed and access token generated successfully'
            };
        } catch (error) {
            this.logger.error('Failed to get installation access token', error);
            return {
                success: false,
                message: 'Failed to get installation access token'
            };
        }
    }

    @Get('installation-at')
    async getInstallationAccessToken(@GetCurrentUser('username') username: string) {
        return this.githubService.getAppAccessToken(username);
    }

    @Get('installation/:id/access-token')
    async getInstallationAccessTokenById(@Param('id') installationId: string) {
        return this.githubService.getInstallationAccessToken(parseInt(installationId));
    }
}
