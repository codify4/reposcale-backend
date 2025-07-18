import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateShareLinkDto } from './dto/create-share-link.dto';
import { UpdateShareLinkDto } from './dto/update-share-link.dto';
import { GetCurrentUserId } from '../../auth/common/decorators/get-current-user-id.decorator';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('new')
  async createShareLink(
    @GetCurrentUserId() userId: number,
    @Body() createShareLinkDto: CreateShareLinkDto
  ) {
    return this.linksService.createShareLink(userId, createShareLinkDto);
  }

  @Get('all')
  async listShareLinks(@GetCurrentUserId() userId: number) {
    return this.linksService.listShareLinks(userId);
  }

  @Get(':id')
  async getShareLink(
    @GetCurrentUserId() userId: number,
    @Param('id') shareLinkId: string
  ) {
    return this.linksService.getShareLink(userId, shareLinkId);
  }

  @Put(':id')
  async updateShareLink(
    @GetCurrentUserId() userId: number,
    @Param('id') shareLinkId: string,
    @Body() updateShareLinkDto: UpdateShareLinkDto
  ) {
    return this.linksService.updateShareLink(userId, shareLinkId, updateShareLinkDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteShareLink(
    @GetCurrentUserId() userId: number,
    @Param('id') shareLinkId: string
  ) {
    return this.linksService.deleteShareLink(userId, shareLinkId);
  }

  @Get(':id/analytics')
  async getShareLinkAnalytics(
    @GetCurrentUserId() userId: number,
    @Param('id') shareLinkId: string
  ) {
    return this.linksService.getShareLinkAnalytics(userId, shareLinkId);
  }
}
