import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getMe(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async getUserIdByEmail(email: string): Promise<number | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
        select: { id: true }
      });
      return user?.id || null;
    } catch (error) {
      this.logger.error(`Error finding user by email: ${error.message}`);
      return null;
    }
  }
}
