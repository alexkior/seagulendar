import { Injectable } from '@nestjs/common';
import { Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { Note, User } from '@prisma/client';
import { PrismaService } from './prisma.service';

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
    const userId: number | null = ctx.from.username
      ? (await this.getUserByTg(ctx.from.username)).id
      : null;
    if (userId !== null) {
      const results = (await this.getNotesByUserId(userId)) as Note[];
      await ctx.reply(
        `YOUR NOTES:
        ${results.map(
          (result) => `${result.date} ${result.month} ${result.year} \n`,
        )}`,
      );
    } else {
      await ctx.reply('You are not logged in yet. Please, log in.');
    }
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
