import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GithubService } from './github.service';
import { Public } from 'src/auth/common/decorators/public.decorator';
import { GetCurrentUserId } from 'src/auth/common/decorators/get-current-user-id.decorator';
import { CreateRepoDto } from './dto/create-repo.dto';

@Controller('github')
export class GithubController {
    constructor(private readonly githubService: GithubService) {}

    @Get('install')
    async getInstallationUrl(@GetCurrentUserId() userId: number) {
        return this.githubService.getInstallationUrl(userId);
    }

    @Public()
    @Get('app/callback')
    async handleGitHubAppCallback(
        @Query('installation_id') installationId: string,
        @Query('state') state: string
    ) {
        if (!installationId) {
            return {
                success: false,
                message: 'No installation_id provided. This is not a GitHub App installation callback.'
            };
        }

        return this.githubService.handleInstallationCallback(installationId, state);
    }

    @Get('repos')
    async getRepos(@GetCurrentUserId() userId: number) {
        return this.githubService.getRepos(userId);
    }

    @Get('repos/list')
    async listRepos(@GetCurrentUserId() userId: number) {
        return this.githubService.listRepos(userId);
    }

    @Post('repos/new')
    async createRepo(@Body() createRepoDto: CreateRepoDto | CreateRepoDto[]) {
        if(Array.isArray(createRepoDto)) {
            return this.githubService.createRepos(createRepoDto);
        }
        return this.githubService.createSingleRepo(createRepoDto);
    }

    @Get('repos/:owner/:repo/contents/:path?')
    async getRepo(
        @GetCurrentUserId() userId: number,
        @Param('owner') owner: string,
        @Param('repo') repo: string,
        @Param('path') path: string
    ) {
        return this.githubService.getRepo(owner, repo, path, userId); 
    }
}
