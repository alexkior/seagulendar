import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    console.log('LOGS WORK');
    return 'Hello World!';
  }

  async getUserById(id: number): Promise<User | null> {
    console.log('id', id);
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
