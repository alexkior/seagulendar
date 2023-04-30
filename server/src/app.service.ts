import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('LOGS WORK');
    return 'Hello World!';
  }
}
