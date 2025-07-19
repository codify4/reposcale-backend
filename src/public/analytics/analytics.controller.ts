import { Controller, Get, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { GetCurrentUserId } from 'src/auth/common/decorators/get-current-user-id.decorator';

@Controller('analytics')
export class AnalyticsController {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('overview')
    async getOverview(@GetCurrentUserId() userId: number) {
        return this.analyticsService.getOverview(userId);
    }

    @Get('members/monthly')
    async getMonthlyMembers(@GetCurrentUserId() userId: number) {
        return this.analyticsService.getMonthlyMembers(userId);
    }

    @Get('members/monthly/link/:id')
    async getLinkMembers(
        @Param('id') id: string, 
        @GetCurrentUserId() userId: number
    ) {
        return this.analyticsService.getLinkMembersMonthly(id, userId);
    }

    @Get('links/top')
    async getTopLinks(@GetCurrentUserId() userId: number) {
        return this.analyticsService.getTopLinks(userId);
    }
}
