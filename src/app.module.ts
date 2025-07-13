import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GithubModule } from './github/github.module';
import { LemonsqueezyModule } from './lemonsqueezy/lemonsqueezy.module';
import { AnalyticsController } from './analytics/analytics.controller';
import { AnalyticsModule } from './analytics/analytics.module';
import { BucketsService } from './buckets/buckets.service';
import { BucketsModule } from './buckets/buckets.module';
import { LinksController } from './links/links.controller';
import { LinksModule } from './links/links.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/common/guards/jwt.guard';
import { OrdersModule } from './orders/orders.module';
import { OrderService } from './order/order.service';

@Module({
  imports: [
    UserModule, 
    AuthModule, 
    GithubModule, 
    LemonsqueezyModule, 
    AnalyticsModule, 
    BucketsModule, 
    LinksModule, 
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    OrdersModule,
  ],
  controllers: [AnalyticsController, LinksController],
  providers: [
    BucketsService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    OrderService,
  ],
})
export class AppModule {}
