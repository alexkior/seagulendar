import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

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
}
