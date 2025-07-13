import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as crypto from 'crypto';
import { OrdersService } from 'src/integrations/orders/orders.service';

@Injectable()
export class LemonSqueezyService {
  private readonly logger = new Logger(LemonSqueezyService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly ordersService: OrdersService,
  ) {}

  async createCheckout(variantId: string): Promise<string> {
    const url = 'https://api.lemonsqueezy.com/v1/checkouts';

    const payload = {
      data: {
        type: 'checkouts',
        attributes: {
          variant_id: variantId,
        },
      },
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, payload, {
          headers: {
            Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
          },
        }),
      );

      return response.data.data.attributes.checkout_url;
    } catch (error) {
      this.logger.error(
        'Failed to create Lemon Squeezy checkout',
        error.response?.data || error.message,
      );
      throw new BadRequestException('Unable to create checkout session');
    }
  }

  verifyWebhookSignature(rawBody: string, signature: string): boolean {
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;
    if (!secret) {
      this.logger.error('Webhook secret not configured');
      return false;
    }

    const hmac = crypto.createHmac('sha256', secret);
    const digest = hmac.update(rawBody).digest('hex');

    return digest === signature;
  }

  async handleWebhookEvent(payload: any) {
    const eventName = payload.meta?.event_name;

    if (eventName === 'order_created') {
      this.logger.log('Processing order_created event');
      const orderData = payload.data;

      await this.saveOrder({
        lemonOrderId: orderData.id,
        userId: orderData.attributes.user_id,
        productId: orderData.attributes.product_id,
        variantId: orderData.attributes.variant_id,
        amount: orderData.attributes.total,
        purchasedAt: orderData.attributes.created_at,
      });
    } else {
      this.logger.warn(`Ignoring unhandled webhook event: ${eventName}`);
    }
  }

  async saveOrder(order: {
    userId: number;
    productId: string;
    variantId: string;
    lemonOrderId: string;
    amount: number;
    purchasedAt: string;
  }) {
    await this.ordersService.createOrder(
      order.userId,
      order.productId,
      order.amount,
      order.variantId,
      order.lemonOrderId,
    );
  }
}
