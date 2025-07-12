import { Module } from '@nestjs/common';
import { LemonsqueezyService } from './lemonsqueezy.service';
import { LemonsqueezyController } from './lemonsqueezy.controller';

@Module({
  providers: [LemonsqueezyService],
  controllers: [LemonsqueezyController]
})
export class LemonsqueezyModule {}
