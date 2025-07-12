import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { GetCurrentUserId } from 'src/auth/common/decorators/get-current-user-id.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('')
    getMe(@GetCurrentUserId() userId: number) {
        return this.userService.getMe(userId);
    }
}
