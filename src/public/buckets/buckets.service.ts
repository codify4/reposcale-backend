import { BadRequestException, ForbiddenException, Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBucketDto } from './dto/create-bucket.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UpdateBucketDto } from './dto/update-bucket.dto';
import { AccessShareLinkDto } from '../public-link/dto/access-share-link.dto';

@Injectable()
export class BucketsService {
    private readonly logger = new Logger(BucketsService.name);
    constructor(private readonly prisma: PrismaService) {}

    async createBucket(userId: number, createBucketDto: CreateBucketDto) {
        const repositories = await this.prisma.repository.findMany({
            where: {
                id: {
                    in: createBucketDto.repositoryIds
                },
                installation: {
                    userId: userId
                }
            }
        });

        if (repositories.length !== createBucketDto.repositoryIds.length) {
            throw new NotFoundException('One or more repositories not found or access denied');
        }

        const bucket = await this.prisma.bucket.create({
            data: {
                ...createBucketDto,
                userId,
                token: this.generateSecureToken(),
                password: createBucketDto.password ? await this.hashPassword(createBucketDto.password) : null,
                repositories: {
                    create: repositories.map(repo => ({
                        repositoryId: repo.id
                    }))
                }
            },
            include: {
                repositories: {
                    include: {
                        repository: true
                    }
                }
            }
        });

        return bucket;
    }

    async getBuckets(userId: number) {
        const buckets = await this.prisma.bucket.findMany({
            where: {
                userId
            },
            include: {
                repositories: {
                    include: {
                        repository: true
                    }
                }
            }
        });

        return buckets;
    }

    async getBucket(id: string, userId: number) {
        const bucket = await this.prisma.bucket.findFirst({
            where: {
                id,
                userId
            },
            include: {
                repositories: {
                    include: {
                        repository: true
                    }
                }
            }
        });

        if (!bucket) {
            this.logger.error(`Bucket not found for id: ${id} and user: ${userId}`);
            throw new NotFoundException('Bucket not found');
        }

        return bucket;
    }

    async updateBucket(id: string, updateBucketDto: UpdateBucketDto, userId: number) {
        if (!id) {
            throw new BadRequestException('Bucket id is required');
        }

        // Check if bucket exists and belongs to user
        const existingBucket = await this.prisma.bucket.findFirst({
            where: {
                id,
                userId
            }
        });

        if (!existingBucket) {
            this.logger.error(`Bucket not found for id: ${id} and user: ${userId}`);
            throw new NotFoundException('Bucket not found');
        }

        // Update bucket data
        const updateData: any = {};
        
        if (updateBucketDto.name !== undefined) updateData.name = updateBucketDto.name;
        if (updateBucketDto.description !== undefined) updateData.description = updateBucketDto.description;
        if (updateBucketDto.expiresAt !== undefined) updateData.expiresAt = updateBucketDto.expiresAt;
        if (updateBucketDto.maxMembers !== undefined) updateData.maxMembers = updateBucketDto.maxMembers;
        if (updateBucketDto.isActive !== undefined) updateData.isActive = updateBucketDto.isActive;

        // Handle password update
        if (updateBucketDto.password !== undefined) {
            updateData.password = updateBucketDto.password ? await this.hashPassword(updateBucketDto.password) : null;
        }

        // Handle repository updates if provided
        if (updateBucketDto.repositoryIds) {
            const repositories = await this.prisma.repository.findMany({
                where: {
                    id: {
                        in: updateBucketDto.repositoryIds
                    },
                    installation: {
                        userId: userId
                    }
                }
            });

            if (repositories.length !== updateBucketDto.repositoryIds.length) {
                throw new NotFoundException('One or more repositories not found or access denied');
            }

            // Delete existing repository associations
            await this.prisma.bucketRepository.deleteMany({
                where: {
                    bucketId: id
                }
            });

            // Create new repository associations
            updateData.repositories = {
                create: repositories.map(repo => ({
                    repositoryId: repo.id
                }))
            };
        }

        const bucket = await this.prisma.bucket.update({
            where: { id },
            data: updateData,
            include: {
                repositories: {
                    include: {
                        repository: true
                    }
                }
            }
        });

        return bucket;
    }

    async deleteBucket(id: string, userId: number) {
        // Check if bucket exists and belongs to user
        const bucket = await this.prisma.bucket.findFirst({
            where: {
                id,
                userId
            }
        });

        if (!bucket) {
            this.logger.error(`Bucket not found for id: ${id} and user: ${userId}`);
            throw new NotFoundException('Bucket not found');
        }

        // Delete bucket (cascading will handle related records)
        await this.prisma.bucket.delete({
            where: { id }
        });

        return {
            message: 'Bucket deleted successfully'
        };
    }

    async getPublicBucket(token: string) {
        if (!token) {
            throw new BadRequestException('Token is required');
        }

        const bucket = await this.prisma.bucket.findUnique({
            where: { token },
            include: {
                repositories: {
                    include: {
                        repository: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        username: true,
                        name: true
                    }
                }
            }
        });

        if (!bucket) {
            this.logger.error(`Bucket not found for token: ${token}`);
            throw new NotFoundException('Bucket not found');
        }

        return {
            message: 'Bucket found successfully',
            bucket
        };
    }

    async validateBucket(token: string) {
        if (!token) {
            throw new BadRequestException('Token is required');
        }

        const bucket = await this.prisma.bucket.findUnique({
            where: { token },
            include: {
                repositories: {
                    include: {
                        repository: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        username: true,
                        name: true
                    }
                }
            }
        });

        if (!bucket) {
            this.logger.error(`Bucket not found for token: ${token}`);
            throw new NotFoundException('Bucket not found');
        }

        return {
            message: 'Bucket found successfully',
            bucket
        };
    }

    async validateBucketAccess(token: string, accessDto?: AccessShareLinkDto, ipAddress?: string) {
        if (!token) {
            throw new BadRequestException('Token is required');
        }

        const bucket = await this.prisma.bucket.findUnique({
            where: { token },
            include: {
                repositories: {
                    include: {
                        repository: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        username: true,
                        name: true
                    }
                }
            }
        });

        if (!bucket) {
            throw new NotFoundException('Bucket not found');
        }

        if (!bucket.isActive) {
            throw new ForbiddenException('Bucket is inactive');
        }

        if (bucket.expiresAt && bucket.expiresAt < new Date()) {
            throw new ForbiddenException('Bucket has expired');
        }

        if (bucket.maxMembers && bucket.memberCount >= bucket.maxMembers) {
            throw new ForbiddenException('Bucket view limit exceeded');
        }

        if (bucket.password) {
            if (!accessDto?.password) {
                throw new UnauthorizedException('Password required');
            }
            
            const isValidPassword = await this.verifyPassword(accessDto.password, bucket.password);
            if (!isValidPassword) {
                throw new UnauthorizedException('Invalid password');
            }
        }

        // Track member access if IP address is provided
        if (ipAddress) {
            await this.trackMemberAccess(bucket.id, ipAddress);
        }

        return {
            success: true,
            message: 'Access granted',
            data: {
                bucket: {
                    id: bucket.id,
                    name: bucket.name,
                    description: bucket.description,
                    repositories: bucket.repositories,
                    user: bucket.user,
                }
            }
        };
    }

    private async trackMemberAccess(bucketId: string, ipAddress: string) {
        try {
            // Check if this IP has already accessed this bucket
            const existingMember = await this.prisma.bucketMember.findFirst({
                where: {
                    bucketId,
                    ipAddress
                }
            });

            if (!existingMember) {
                // Create new member record and increment member count
                await this.prisma.$transaction([
                    this.prisma.bucketMember.create({
                        data: {
                            bucketId,
                            ipAddress
                        }
                    }),
                    this.prisma.bucket.update({
                        where: { id: bucketId },
                        data: {
                            memberCount: {
                                increment: 1
                            }
                        }
                    })
                ]);
            }
        } catch (error) {
            this.logger.error(`Failed to track member access for bucket ${bucketId}: ${error.message}`);
            // Don't throw error as this is not critical for the main functionality
        }
    }

    private generateSecureToken(): string {
        return crypto.randomBytes(32).toString('hex');
    }
    
    private async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }

    private async verifyPassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
