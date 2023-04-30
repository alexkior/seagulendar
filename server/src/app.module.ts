import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { TelegramModule } from './telegram/telegram.module';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    UserModule,
    NoteModule,
    TelegramModule,
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
