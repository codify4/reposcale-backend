import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from 'passport-github';
import { JwtService } from '@nestjs/jwt';
import { User } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async findOrCreateUserFromGithub(profile: Profile) {
    const githubId = profile.id;
    const email = profile.email;
    const username = profile.username;
    const name = profile.displayName || null;
    const avatarUrl = profile.photos && profile.photos[0]?.value;

    let user = await this.prisma.user.findUnique({
      where: { githubId },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          githubId,
          email,
          username,
          name,
          avatarUrl,
        },
      });
    }

    return this.generateJwtForUser(user);
  }

  generateJwtForUser(user: User) {
    const payload = { sub: user.id, username: user.username };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
