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

@Module({
  imports: [UserModule, AuthModule, GithubModule, LemonsqueezyModule, AnalyticsModule, BucketsModule, LinksModule],
  controllers: [AnalyticsController, LinksController],
  providers: [BucketsService],
})
export class AppModule {}
