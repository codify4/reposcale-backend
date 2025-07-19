import { Module } from '@nestjs/common';
import { BucketsController } from './buckets.controller';
import { BucketsService } from './buckets.service';

@Module({
  controllers: [BucketsController],
  providers: [BucketsService],
})
export class BucketsModule {}
