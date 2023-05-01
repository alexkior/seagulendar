import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { TelegramModule } from './telegram/telegram.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramAuthController } from './telegram/telegram.auth.controller';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    NoteModule,
    TelegramModule,
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
    }),
    ThrottlerModule.forRoot({
      ttl: 60, // time to live in seconds
      limit: 10, // number of requests allowed in the ttl duration
    }),
  ],
  controllers: [AppController, TelegramAuthController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
