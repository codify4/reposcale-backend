import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GithubGuard } from './common/guards/github.guard';
import { Public } from './common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(GithubGuard)
  @Get('github')
  async githubLogin() {
    // Initiates GitHub OAuth login flow
  }

  @Public()
  @UseGuards(GithubGuard)
  @Get('callback')
  async githubCallback(@Req() req) {
    return req.user;
  }
}
