import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './public/user/user.module';
import { AuthModule } from './auth/auth.module';
import { GithubModule } from './integrations/github/github.module';
import { LemonSqueezyModule } from './integrations/lemonsqueezy/lemonsqueezy.module';
import { AnalyticsModule } from './public/analytics/analytics.module';
import { BucketsModule } from './public/buckets/buckets.module';
import { LinksModule } from './public/links/links.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/common/guards/jwt.guard';
import { OrdersModule } from './integrations/orders/orders.module';
import { RateLimitMiddleware } from './middleware/rate-limit.middleware';
import { PublicLinkModule } from './public/public-link/public-link.module';
import { WaitlistModule } from './public/waitlist/waitlist.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    GithubModule,
    LemonSqueezyModule,
    AnalyticsModule,
    BucketsModule,
    LinksModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    OrdersModule,
    PublicLinkModule,
    WaitlistModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RateLimitMiddleware)
      .forRoutes('public/*', 'links/*', 'auth/*', 'integrations/*');
  }
}
