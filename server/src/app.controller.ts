import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { urlStrToAuthDataMap, AuthDataValidator } from '@telegram-auth/server';

const validator = new AuthDataValidator({ botToken: process.env.BOT_TOKEN });
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('login')
  async getLogin(@Param('url') url: string): Promise<void> {
    const data = urlStrToAuthDataMap(url);

    try {
      // validate the data by passing the map to the validator
      const user = await validator.validate(data);

      // The data is now valid and you can sign in the user.

      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

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
