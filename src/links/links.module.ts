import { Module } from '@nestjs/common';
import { LinksService } from './links.service';

@Module({
  providers: [LinksService]
})
export class LinksModule {}
