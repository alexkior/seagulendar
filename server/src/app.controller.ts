import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    try {
      const result = await 'this';
      return `Hello World! DB result: ${JSON.stringify(result)}`;
    } catch (error) {
      console.error('Error executing ClickHouse query:', error);
      return 'Hello World! DB error.';
    }
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User | null> {
    return this.appService.getUserById(Number(id));
  }
}
