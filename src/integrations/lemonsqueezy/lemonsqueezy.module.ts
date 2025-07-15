import { Module } from '@nestjs/common';
import { LemonSqueezyService } from './lemonsqueezy.service';
import { LemonSqueezyController } from './lemonsqueezy.controller';
import { HttpModule } from '@nestjs/axios';
import { OrdersModule } from '../orders/orders.module';
import { UserModule } from 'src/public/user/user.module';

@Module({
  imports: [
    HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
    OrdersModule,
    UserModule,
  ],
  providers: [LemonSqueezyService],
  controllers: [LemonSqueezyController],
})
export class LemonSqueezyModule {}
