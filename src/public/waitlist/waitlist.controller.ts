import { Body, Controller, Get, Post } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { Public } from 'src/auth/common/decorators/public.decorator';

@Public()
@Controller('waitlist')
export class WaitlistController {
    constructor(private readonly waitlistService: WaitlistService) {}

    @Post()
    async createWaitlist(@Body() body: { email: string }) {
        return this.waitlistService.createWaitlist(body.email);
    }

    @Get()
    async getWaitlistSignups() {
        return this.waitlistService.getWaitlistSignups();
    }
}
