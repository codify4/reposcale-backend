import { Injectable, NotFoundException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AccessShareLinkDto } from './dto/access-share-link.dto';
import { GithubService } from '../../integrations/github/github.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PublicLinkService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly githubService: GithubService
  ) {}

  private async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async validateShareLinkAccess(token: string, accessDto?: AccessShareLinkDto, ipAddress?: string) {
    const shareLink = await this.prisma.shareLink.findUnique({
      where: { token },
      include: {
        repository: {
          include: {
            installation: true
          }
        },
        user: {
          select: {
            id: true,
            username: true,
            name: true,
          }
        }
      }
    });

    if (!shareLink) {
      throw new NotFoundException('Share link not found');
    }

    if (!shareLink.isActive) {
      throw new ForbiddenException('Share link is inactive');
    }

    if (shareLink.expiresAt && shareLink.expiresAt < new Date()) {
      throw new ForbiddenException('Share link has expired');
    }

    if (shareLink.maxMembers && shareLink.memberCount >= shareLink.maxMembers) {
      throw new ForbiddenException('Share link view limit exceeded');
    }

    if (shareLink.password) {
      if (!accessDto?.password) {
        throw new UnauthorizedException('Password required');
      }
      
      const isValidPassword = await this.verifyPassword(accessDto.password, shareLink.password);
      if (!isValidPassword) {
        throw new UnauthorizedException('Invalid password');
      }
    }

    await this.recordView(shareLink.id, ipAddress);

    return {
      success: true,
      message: 'Access granted',
      data: {
        shareLink: {
          id: shareLink.id,
          name: shareLink.name,
          description: shareLink.description,
          repository: shareLink.repository,
          user: shareLink.user,
        }
      }
    };
  }

  private async recordView(shareLinkId: string, ipAddress?: string) {
    await this.prisma.$transaction([
      this.prisma.shareMember.create({
        data: {
          shareLinkId,
          ipAddress,
        }
      }),
      this.prisma.shareLink.update({
        where: { id: shareLinkId },
        data: {
          memberCount: {
            increment: 1
          }
        }
      })
    ]);
  }

  async getShareLinkInfo(token: string) {
    const shareLink = await this.prisma.shareLink.findUnique({
      where: { token },
      include: {
        repository: {
          select: {
            id: true,
            name: true,
            description: true,
          }
        },
        user: {
          select: {
            username: true,
            name: true,
          }
        }
      }
    });

    if (!shareLink) {
      throw new NotFoundException('Share link not found');
    }

    if (!shareLink.isActive) {
      throw new ForbiddenException('Share link is inactive');   
    }

    if (shareLink.expiresAt && shareLink.expiresAt < new Date()) {
      throw new ForbiddenException('Share link has expired');
    }

    if (shareLink.maxMembers && shareLink.memberCount >= shareLink.maxMembers) {
      throw new ForbiddenException('Share link view limit exceeded');
    }

    return {
      success: true,
      message: 'Share link info retrieved successfully',
      data: {
        id: shareLink.id,
        name: shareLink.name,
        description: shareLink.description,
        hasPassword: !!shareLink.password,
        memberCount: shareLink.memberCount,
        maxMembers: shareLink.maxMembers,
        expiresAt: shareLink.expiresAt,
        repository: shareLink.repository,
        user: shareLink.user,
      }
    };
  }

  async accessRepositoryContent(token: string, owner: string, repo: string, path: string = '', accessDto?: AccessShareLinkDto, ipAddress?: string) {
    const validation = await this.validateShareLinkAccess(token, accessDto, ipAddress);
    
    if (!validation.success) {
      throw new Error('Access denied');
    }

    const shareLink = validation.data.shareLink;
    const repositoryContent = await this.githubService.getRepo(owner, repo, path, shareLink.user.id);
    
    return {
      success: true,
      message: 'Repository content accessed successfully',
      data: {
        shareLink: {
          id: shareLink.id,
          name: shareLink.name,
          description: shareLink.description,
        },
        content: repositoryContent
      }
    };
  }

  async getRepositoryTree(token: string, owner: string, repo: string, path: string = '', accessDto?: AccessShareLinkDto, ipAddress?: string) {
    const validation = await this.validateShareLinkAccess(token, accessDto, ipAddress);
    
    if (!validation.success) {
      throw new Error('Access denied');
    }

    const shareLink = validation.data.shareLink;
    const repositoryTree = await this.githubService.getRepo(owner, repo, path, shareLink.user.id);
    
    return {
      success: true,
      message: 'Repository tree retrieved successfully',
      data: {
        shareLink: {
          id: shareLink.id,
          name: shareLink.name,
          description: shareLink.description,
        },
        tree: repositoryTree
      }
    };
  }
}
