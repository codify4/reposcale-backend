import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as crypto from 'crypto';
import { OrdersService } from 'src/integrations/orders/orders.service';
import { UserService } from 'src/public/user/user.service';

@Injectable()
export class LemonSqueezyService {
  private readonly logger = new Logger(LemonSqueezyService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly ordersService: OrdersService,
    private readonly userService: UserService,
  ) {}

  async createCheckout(variantId: string, userId: number): Promise<string> {
    const url = 'https://api.lemonsqueezy.com/v1/checkouts';

    const user = await this.userService.getMe(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const payload = {
      data: {
        type: 'checkouts',
        attributes: {
          product_options: {
            redirect_url: `${process.env.SITE_URL}/dashboard`,
          },
          checkout_data: { 
            email: user.email,
          }
        },
        relationships: {
          store: {
            data: {
              type: 'stores',
              id: process.env.LEMON_SQUEEZY_STORE_ID,
            },
          },
          variant: {
            data: {
              type: 'variants',
              id: variantId,
            },
          },
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

      return response.data.data.attributes.url;
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
    this.logger.log('Webhook payload structure:', JSON.stringify(payload, null, 2));
    const eventName = payload.meta?.event_name;

    if (eventName === 'order_created') {
      this.logger.log('Processing order_created event');
      const orderData = payload.data;

      const userEmail = orderData.attributes.user_email
      if (!userEmail) {
        this.logger.error('No user_email found in webhook payload');
        return;
      }
      
      const userId = await this.userService.getUserIdByEmail(userEmail);
      if (!userId) {
        this.logger.error('No user_id found in webhook payload custom data');
        return;
      }

      await this.ordersService.createOrder(
        userId,
        orderData.attributes.first_order_item?.product_id || orderData.attributes.product_id,
        orderData.attributes.total,
        orderData.attributes.first_order_item?.variant_id || orderData.attributes.variant_id,
        orderData.id,
      );
    } else {
      this.logger.warn(`Ignoring unhandled webhook event: ${eventName}`);
    }
  }
}
