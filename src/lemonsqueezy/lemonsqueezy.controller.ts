import {
  Controller,
  Post,
  Body,
  Headers,
  Req,
  Res,
  HttpCode,
  HttpStatus,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { LemonSqueezyService } from './lemonsqueezy.service';
import { Request, Response } from 'express';
  
@Controller('lemon-squeezy')
export class LemonSqueezyController {
  private readonly logger = new Logger(LemonSqueezyController.name);

  constructor(private readonly lemonService: LemonSqueezyService) {}

  @Post('checkout')
  async createCheckout(
    @Body() body: { variantId: string },
  ) {
    const { variantId } = body;

    if (!variantId) {
      throw new BadRequestException('variantId is required');
    }

    const checkoutUrl = await this.lemonService.createCheckout(
      variantId,
    );

    return { checkoutUrl };
  }
  
  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  async handleWebhook(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('x-signature') signature: string,
  ) {
    try {
      // rawBody must be available for signature verification (see middleware setup)
      const rawBody = (req as any).rawBody;
      if (!rawBody) {
        this.logger.error('Raw body is missing for webhook signature verification');
        return res.status(400).send('Raw body required');
      }

      if (!this.lemonService.verifyWebhookSignature(rawBody, signature)) {
        this.logger.warn('Invalid webhook signature');
        return res.status(400).send('Invalid signature');
      }

      const payload = JSON.parse(rawBody);

      await this.lemonService.handleWebhookEvent(payload);

      return res.status(200).send('ok');
    } catch (error) {
      this.logger.error('Error handling webhook', error);
      return res.status(500).send('Internal server error');
    }
  }
}
  