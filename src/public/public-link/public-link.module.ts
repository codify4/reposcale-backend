import { Module } from '@nestjs/common';
import { PublicLinkService } from './public-link.service';
import { PublicLinkController } from './public-link.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { GithubModule } from '../../integrations/github/github.module';

@Module({
  imports: [PrismaModule, GithubModule],
  providers: [PublicLinkService],
  controllers: [PublicLinkController],
  exports: [PublicLinkService],
})
export class PublicLinkModule {}
