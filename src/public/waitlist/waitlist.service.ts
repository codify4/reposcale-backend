import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';

@Injectable()
export class WaitlistService {
    constructor(private readonly prisma: PrismaService) {}

    async createWaitlist(createWaitlistDto: CreateWaitlistDto) {
        const waitlist = await this.prisma.waitlist.create({
            data: {
                email: createWaitlistDto.email,
            },
        });

        if (!waitlist) {
            throw new Error('Failed to create waitlist');
        }

        return waitlist;
    }

    async getWaitlistSignups() {
        const waitlist = await this.prisma.waitlist.findMany();

        if (!waitlist) {
            throw new Error('Failed to get waitlist');
        }

        return waitlist;
    }
}
