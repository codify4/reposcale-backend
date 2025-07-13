import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
    constructor(private readonly prisma: PrismaService) {}

    async createOrder(userId: number, productId: string, amount: number, variantId: string, lemonOrderId: string) {
        
        const order = await this.prisma.order.create({
            data: {
                userId,
                productId,
                amount,
                variantId,
                lemonOrderId,
                purchasedAt: new Date(),
            },
        });

        return order;
    }
}
