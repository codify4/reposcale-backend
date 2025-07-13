import { Module } from '@nestjs/common';
import { BucketsController } from './buckets.controller';

@Module({
  controllers: [BucketsController],
})
export class BucketsModule {}
