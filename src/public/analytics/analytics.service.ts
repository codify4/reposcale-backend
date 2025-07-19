import { Injectable, Logger, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnalyticsService {
    private readonly logger = new Logger(AnalyticsService.name);
    
    constructor(private readonly prisma: PrismaService) {}

    async getOverview(userId: number) {
        try {
            const totalLinks = await this.prisma.shareLink.count({
                where: { userId }
            });
            
            const totalMembers = await this.prisma.shareMember.count({
                where: {
                    shareLink: { userId }
                }
            });

            return {
                success: true,
                data: {
                    totalLinks,
                    totalMembers,
                }
            };
        } catch (error) {
            this.logger.error(`Error getting overview for user ${userId}:`, error);
            throw new InternalServerErrorException('Failed to retrieve overview data');
        }
    }

    async getMonthlyMembers(userId: number) {
        try {
            const monthlyMembers = await this.prisma.shareMember.findMany({
                where: {
                    joinedAt: {
                        gte: new Date(new Date().setMonth(new Date().getMonth() - 1))
                    },
                    shareLink: { userId }
                }
            });

            const monthlyMembersCount = {};

            monthlyMembers.forEach(member => {
                const month = member.joinedAt.toLocaleString('default', { month: 'long' });
                monthlyMembersCount[month] = (monthlyMembersCount[month] || 0) + 1;
            });

            const monthlyMembersArray = Object.entries(monthlyMembersCount).map(([month, count]) => ({
                month,
                count
            }));

            return {
                success: true,
                data: monthlyMembersArray
            };
        } catch (error) {
            this.logger.error(`Error getting monthly members for user ${userId}:`, error);
            throw new InternalServerErrorException('Failed to retrieve monthly members data');
        }
    }

    async getLinkMembersMonthly(linkId: string, userId: number) {
        try {
            const shareLink = await this.prisma.shareLink.findFirst({
                where: {
                    id: linkId,
                    userId
                }
            });

            if (!shareLink) {
                throw new NotFoundException('Share link not found');
            }

            const linkMembers = await this.prisma.shareMember.findMany({
                where: {
                    shareLinkId: linkId
                }
            });

            const linkMembersCount = {};

            linkMembers.forEach(member => {
                const month = member.joinedAt.toLocaleString('default', { month: 'long' });
                linkMembersCount[month] = (linkMembersCount[month] || 0) + 1;
            });

            const linkMembersArray = Object.entries(linkMembersCount).map(([month, count]) => ({
                month,
                count
            }));

            return {
                success: true,
                data: linkMembersArray
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            this.logger.error(`Error getting link members for user ${userId}, link ${linkId}:`, error);
            throw new InternalServerErrorException('Failed to retrieve link members data');
        }
    }

    async getTopLinks(userId: number) {
        try {
            const topLinks = await this.prisma.shareLink.findMany({
                where: { userId },
                orderBy: {
                    memberCount: 'desc'
                },
                take: 10,
                include: {
                    repository: {
                        select: {
                            name: true,
                            description: true
                        }
                    }
                }
            });

            return {
                success: true,
                data: topLinks
            };
        } catch (error) {
            this.logger.error(`Error getting top links for user ${userId}:`, error);
            throw new InternalServerErrorException('Failed to retrieve top links data');
        }
    }
}
