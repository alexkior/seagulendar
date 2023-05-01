import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getBotToken } from 'nestjs-telegraf';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const bot = app.get(getBotToken());
  app.use(bot.webhookCallback('/secret-path'));
  app.use(cookieParser());
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
