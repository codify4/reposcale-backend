import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async getMe(userId: number) {
        return this.prisma.user.findUnique({
            where: { id: userId },
        });
    }
}
