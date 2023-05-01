import { Get, Injectable } from '@nestjs/common';
import { Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { Context } from 'telegraf';
import { Note, User } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { urlStrToAuthDataMap, AuthDataValidator } from '@telegram-auth/server';

@Update()
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getNotesByUserId(userId: number): Promise<Note[]> {
    return this.prisma.note.findMany({
      where: { userId },
    });
  }

  async getUserByTg(tg: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { tg },
    });
  }

  getHello(): string {
    console.log('LOGS WORK');
    return 'Hello World!';
  }

  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('🐦');
    await ctx.reply('🐦 WELCOME TO SEAGULENDAR 🐦');
    await ctx.reply('🐦 THE BEST CALENDAR EVER 🐦');
    await ctx.reply('Here is an app sgdr.live');
    console.log(ctx.from.username, 'ctx.from.username');
  }

  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: Context) {
    await ctx.reply('Hey there');
  }
}
