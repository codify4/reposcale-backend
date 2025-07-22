import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/common/decorators/public.decorator';

@Controller('')
export class AppController {
  @Public()
  @Get('ping')
  ping() {
    return 'pong';
  }
}
