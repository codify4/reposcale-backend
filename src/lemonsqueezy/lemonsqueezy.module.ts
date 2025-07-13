import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LemonSqueezyService } from './lemonsqueezy.service';
import { LemonSqueezyController } from './lemonsqueezy.controller';
import { HttpModule } from '@nestjs/axios';
import { RawBodyMiddleware } from 'src/middleware/raw-body.middleware';

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
  providers: [LemonSqueezyService],
  controllers: [LemonSqueezyController]
})
export class LemonSqueezyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RawBodyMiddleware).forRoutes('lemon-squeezy/webhook');
  }
}
