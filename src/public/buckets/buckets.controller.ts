import { Body, Controller, Get, Post, Put, Param, Delete, Req } from '@nestjs/common';
import { BucketsService } from './buckets.service';
import { GetCurrentUserId } from 'src/auth/common/decorators/get-current-user-id.decorator';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { UpdateBucketDto } from './dto/update-bucket.dto';
import { Public } from 'src/auth/common/decorators/public.decorator';
import { AccessShareLinkDto } from '../public-link/dto/access-share-link.dto';

@Controller('buckets')
export class BucketsController {
    constructor(private readonly bucketsService: BucketsService) {}

    @Post()
    async createBucket(
        @GetCurrentUserId() userId: number, 
        @Body() createBucketDto: CreateBucketDto
    ) {
        return this.bucketsService.createBucket(userId, createBucketDto);
    }

    @Get()
    async getBuckets(@GetCurrentUserId() userId: number) {
        return this.bucketsService.getBuckets(userId);
    }

    @Get(':id')
    async getBucket(
        @Param('id') id: string,
        @GetCurrentUserId() userId: number
    ) {
        return this.bucketsService.getBucket(id, userId);
    }

    @Put(':id')
    async updateBucket(
        @Param('id') id: string, 
        @Body() updateBucketDto: UpdateBucketDto,
        @GetCurrentUserId() userId: number
    ) {
        return this.bucketsService.updateBucket(id, updateBucketDto, userId);
    }

    @Delete(':id')
    async deleteBucket(
        @Param('id') id: string,
        @GetCurrentUserId() userId: number
    ) {
        return this.bucketsService.deleteBucket(id, userId);
    }

    @Public()
    @Get('/public/:token')
    async getPublicBucket(@Param('token') token: string) {
        return this.bucketsService.getPublicBucket(token);
    }

    @Public()
    @Post('/validate/:token')
    async validateBucket(@Param('token') token: string) {
        return this.bucketsService.validateBucket(token);
    }

    @Public()
    @Post('/access/:token/validate')
    async validateBucketAccess(
        @Param('token') token: string,
        @Body() accessDto: AccessShareLinkDto,
        @Req() req: any
    ) {
        const ipAddress = req.ip || req.connection.remoteAddress;
        return this.bucketsService.validateBucketAccess(token, accessDto, ipAddress);
    }
}
