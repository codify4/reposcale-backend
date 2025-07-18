import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Param, 
    Req
} from '@nestjs/common';
import { AccessShareLinkDto } from './dto/access-share-link.dto';
import { Public } from '../../auth/common/decorators/public.decorator';
import { PublicLinkService } from './public-link.service';
  
@Controller('public-link')
export class PublicLinkController {
  constructor(
    private readonly publicLinkService: PublicLinkService
  ) {}

  @Public()
  @Get('share/:token/info')
  async getShareLinkInfo(@Param('token') token: string) {
    return this.publicLinkService.getShareLinkInfo(token);
  }

  @Public()
  @Post('share/:token/validate')
  async validateShareLinkAccess(
    @Param('token') token: string,
    @Body() accessDto: AccessShareLinkDto,
    @Req() req: any
  ) {
    const ipAddress = req.ip || req.connection.remoteAddress;
    return this.publicLinkService.validateShareLinkAccess(token, accessDto, ipAddress);
  }

  @Public()
  @Get('share/:token/repository/:owner/:repo/contents/:path?')
  async accessRepositoryContent(
    @Param('token') token: string,
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Param('path') path: string = '',
    @Body() accessDto: AccessShareLinkDto,
    @Req() req: any
  ) {
    const ipAddress = req.ip || req.connection.remoteAddress;
    return this.publicLinkService.accessRepositoryContent(token, owner, repo, path, accessDto, ipAddress);
  }

  @Public()
  @Get('share/:token/repository/:owner/:repo/tree/:path?')
  async getRepositoryTree(
    @Param('token') token: string,
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Param('path') path: string = '',
    @Body() accessDto: AccessShareLinkDto,
    @Req() req: any
  ) {
    const ipAddress = req.ip || req.connection.remoteAddress;
    return this.publicLinkService.getRepositoryTree(token, owner, repo, path, accessDto, ipAddress);
  }
}