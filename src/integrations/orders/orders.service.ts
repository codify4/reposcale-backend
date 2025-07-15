import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(
    userId: number,
    productId: number,
    amount: number,
    variantId: number,
    lemonOrderId: string,
  ) {
    
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
