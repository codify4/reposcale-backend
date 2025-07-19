import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBucketDto } from './dto/create-bucket.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class BucketsService {
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
        });

        return bucket;
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
