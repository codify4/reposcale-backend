import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateWaitlistDto } from './dto/create-waitlist.dto';
import { WaitlistService } from './waitlist.service';
import { Public } from 'src/auth/common/decorators/public.decorator';

@Public()
@Controller('waitlist')
export class WaitlistController {
    constructor(private readonly waitlistService: WaitlistService) {}

    @Post()
    async createWaitlist(@Body() createWaitlistDto: CreateWaitlistDto) {
        return this.waitlistService.createWaitlist(createWaitlistDto);
    }

    @Get()
    async getWaitlistSignups() {
        return this.waitlistService.getWaitlistSignups();
    }
}
