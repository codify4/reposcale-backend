import {
  Controller,
  Post,
  Body,
  Headers,
  Req,
  HttpStatus,
  Logger,
  BadRequestException,
  HttpException,
} from '@nestjs/common';
import { LemonSqueezyService } from './lemonsqueezy.service';
import { Request } from 'express';
import { Public } from 'src/auth/common/decorators/public.decorator';
import { GetCurrentUserId } from 'src/auth/common/decorators/get-current-user-id.decorator';

@Controller('lemon-squeezy')
export class LemonSqueezyController {
  private readonly logger = new Logger(LemonSqueezyController.name);

  constructor(private readonly lemonService: LemonSqueezyService) {}

  @Post('checkout')
  async createCheckout(
    @Body() body: { variantId: string },
    @GetCurrentUserId() userId: number,
  ) {
    const { variantId } = body;

    if (!variantId) {
      throw new BadRequestException('variantId is required');
    }

    const checkoutUrl = await this.lemonService.createCheckout(variantId, userId);
    
    return { checkoutUrl };
  }

  @Public()
  @Post('webhook')
  async handleWebhook(
    @Req() req: Request,
    @Headers('x-signature') signature: string,
  ) {
    try {
      const rawBody = req.body.toString('utf8');

      if (!rawBody) {
        this.logger.error(
          'Raw body is missing for webhook signature verification',
        );
        throw new HttpException('Raw body required', HttpStatus.BAD_REQUEST);
      }

      if (!this.lemonService.verifyWebhookSignature(rawBody, signature)) {
        this.logger.warn('Invalid webhook signature');
        throw new HttpException('Invalid signature', HttpStatus.BAD_REQUEST);
      }

      const payload = JSON.parse(rawBody);
      await this.lemonService.handleWebhookEvent(payload);
      this.logger.log('Webhook event handled successfully');
      return { success: true };
    } catch (error) {
      this.logger.error('Error handling webhook', error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
