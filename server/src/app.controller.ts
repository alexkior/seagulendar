import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClickhouseService } from './clickhouse/clickhouse.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clickhouseService: ClickhouseService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    try {
      const result = await this.clickhouseService.execute('SELECT 1');
      return `Hello World! ClickHouse result: ${JSON.stringify(result)}`;
    } catch (error) {
      console.error('Error executing ClickHouse query:', error);
      return 'Hello World! ClickHouse error.';
    }
  }
}
