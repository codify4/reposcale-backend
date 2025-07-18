import { Injectable, NotFoundException, UnauthorizedException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateShareLinkDto } from './dto/create-share-link.dto';
import { UpdateShareLinkDto } from './dto/update-share-link.dto';
import { AccessShareLinkDto } from '../public-link/dto/access-share-link.dto';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}gith

  private generateSecureToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  private async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async createShareLink(userId: number, createShareLinkDto: CreateShareLinkDto) {
    const repository = await this.prisma.repository.findFirst({
      where: {
        id: createShareLinkDto.repositoryId,
        installation: {
          userId: userId
        }
      }
    });

    if (!repository) {
      throw new NotFoundException('Repository not found or access denied');
    }

    const token = this.generateSecureToken();

    let passwordHash: string | null = null;
    if (createShareLinkDto.password) {
      passwordHash = await this.hashPassword(createShareLinkDto.password);
    }

    let expiresAt: Date | null = null;
    if (createShareLinkDto.expiresAt) {
      expiresAt = new Date(createShareLinkDto.expiresAt);
      if (expiresAt <= new Date()) {
        throw new BadRequestException('Expiration date must be in the future');
      }
    }

    const shareLink = await this.prisma.shareLink.create({
      data: {
        userId,
        repositoryId: createShareLinkDto.repositoryId,
        token,
        name: createShareLinkDto.name,
        description: createShareLinkDto.description,
        password: passwordHash,
        expiresAt,
        maxViews: createShareLinkDto.maxViews,
        allowMembers: createShareLinkDto.allowMembers || false,
      },
      include: {
        repository: true,
        user: {
          select: {
            id: true,
            username: true,
            name: true,
          }
        }
      }
    });

    return {
      success: true,
      message: 'Share link created successfully',
      data: {
        ...shareLink,
        password: undefined, // Don't return password hash
        shareUrl: `${process.env.SITE_URL || 'http://localhost:3000'}/share/${token}`
      }
    };
  }

  async listShareLinks(userId: number) {
    const shareLinks = await this.prisma.shareLink.findMany({
      where: {
        userId,
      },
      include: {
        repository: {
          select: {
            id: true,
            name: true,
            description: true,
          }
        },
        _count: {
          select: {
            views: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return {
      success: true,
      message: 'Share links retrieved successfully',
      data: shareLinks.map(link => ({
        ...link,
        password: undefined, // Don't return password hash
        shareUrl: `${process.env.SITE_URL || 'http://localhost:3000'}/share/${link.token}`
      }))
    };
  }

  async getShareLink(userId: number, shareLinkId: string) {
    const shareLink = await this.prisma.shareLink.findFirst({
      where: {
        id: shareLinkId,
        userId,
      },
      include: {
        repository: {
          select: {
            id: true,
            name: true,
            description: true,
          }
        },
        views: {
          orderBy: {
            viewedAt: 'desc'
          },
          take: 10
        },
        _count: {
          select: {
            views: true
          }
        }
      }
    });

    if (!shareLink) {
      throw new NotFoundException('Share link not found');
    }

    return {
      success: true,
      message: 'Share link retrieved successfully',
      data: {
        ...shareLink,
        password: undefined, // Don't return password hash
        shareUrl: `${process.env.SITE_URL || 'http://localhost:3000'}/share/${shareLink.token}`
      }
    };
  }

  async updateShareLink(userId: number, shareLinkId: string, updateShareLinkDto: UpdateShareLinkDto) {
    const existingLink = await this.prisma.shareLink.findFirst({
      where: {
        id: shareLinkId,
        userId,
      }
    });

    if (!existingLink) {
      throw new NotFoundException('Share link not found');
    }

    let passwordHash: string | null = existingLink.password;
    if (updateShareLinkDto.password) {
      passwordHash = await this.hashPassword(updateShareLinkDto.password);
    }

    let expiresAt: Date | null = existingLink.expiresAt;
    if (updateShareLinkDto.expiresAt) {
      expiresAt = new Date(updateShareLinkDto.expiresAt);
      if (expiresAt <= new Date()) {
        throw new BadRequestException('Expiration date must be in the future');
      }
    }

    const updatedLink = await this.prisma.shareLink.update({
      where: {
        id: shareLinkId,
      },
      data: {
        name: updateShareLinkDto.name,
        description: updateShareLinkDto.description,
        password: passwordHash,
        expiresAt,
        maxViews: updateShareLinkDto.maxViews,
        allowMembers: updateShareLinkDto.allowMembers,
      },
      include: {
        repository: {
          select: {
            id: true,
            name: true,
            description: true,
          }
        }
      }
    });

    return {
      success: true,
      message: 'Share link updated successfully',
      data: {
        ...updatedLink,
        password: undefined, // Don't return password hash
        shareUrl: `${process.env.SITE_URL || 'http://localhost:3000'}/share/${updatedLink.token}`
      }
    };
  }

  async deleteShareLink(userId: number, shareLinkId: string) {
    const shareLink = await this.prisma.shareLink.findFirst({
      where: {
        id: shareLinkId,
        userId,
      }
    });

    if (!shareLink) {
      throw new NotFoundException('Share link not found');
    }

    await this.prisma.shareLink.delete({
      where: {
        id: shareLinkId,
      }
    });

    return {
      success: true,
      message: 'Share link deleted successfully'
    };
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

    // Check if link is active
    if (!shareLink.isActive) {
      throw new ForbiddenException('Share link is inactive');
    }

    // Check expiration
    if (shareLink.expiresAt && shareLink.expiresAt < new Date()) {
      throw new ForbiddenException('Share link has expired');
    }

    // Check view limit
    if (shareLink.maxViews && shareLink.viewCount >= shareLink.maxViews) {
      throw new ForbiddenException('Share link view limit exceeded');
    }

    // Check password if required
    if (shareLink.password) {
      if (!accessDto?.password) {
        throw new UnauthorizedException('Password required');
      }
      
      const isValidPassword = await this.verifyPassword(accessDto.password, shareLink.password);
      if (!isValidPassword) {
        throw new UnauthorizedException('Invalid password');
      }
    }

    // Record the view
    await this.recordView(shareLink.id, ipAddress);

    return {
      success: true,
      message: 'Access granted',
      data: {
        shareLink: {
          id: shareLink.id,
          name: shareLink.name,
          description: shareLink.description,
          allowMembers: shareLink.allowMembers,
          repository: shareLink.repository,
          user: shareLink.user,
        }
      }
    };
  }

  /**
   * Record a view for analytics
   */
  private async recordView(shareLinkId: string, ipAddress?: string) {
    await this.prisma.$transaction([
      // Record the view
      this.prisma.shareView.create({
        data: {
          shareLinkId,
          ipAddress,
          userAgent: 'API Access', // Could be enhanced with actual user agent
        }
      }),
      // Increment view count
      this.prisma.shareLink.update({
        where: { id: shareLinkId },
        data: {
          viewCount: {
            increment: 1
          }
        }
      })
    ]);
  }

  /**
   * Get share link analytics
   */
  async getShareLinkAnalytics(userId: number, shareLinkId: string) {
    const shareLink = await this.prisma.shareLink.findFirst({
      where: {
        id: shareLinkId,
        userId,
      },
      include: {
        views: {
          orderBy: {
            viewedAt: 'desc'
          }
        },
        _count: {
          select: {
            views: true
          }
        }
      }
    });

    if (!shareLink) {
      throw new NotFoundException('Share link not found');
    }

    return {
      success: true,
      message: 'Analytics retrieved successfully',
      data: {
        totalViews: shareLink._count.views,
        recentViews: shareLink.views.slice(0, 20), // Last 20 views
        shareLink: {
          id: shareLink.id,
          name: shareLink.name,
          viewCount: shareLink.viewCount,
          maxViews: shareLink.maxViews,
          expiresAt: shareLink.expiresAt,
          isActive: shareLink.isActive,
        }
      }
    };
  }
}
