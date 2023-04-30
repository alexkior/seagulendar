import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TelegramService {
  constructor(private prisma: PrismaService) {}
}
