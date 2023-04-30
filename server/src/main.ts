import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getBotToken } from 'nestjs-telegraf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const bot = app.get(getBotToken());
  app.use(bot.webhookCallback('/secret-path'));
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
