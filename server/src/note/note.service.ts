import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Note, Prisma } from '@prisma/client';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  async createNote(data: Prisma.NoteCreateInput): Promise<Note> {
    return this.prisma.note.create({
      data,
    });
  }

  async getNoteById(id: number): Promise<Note | null> {
    return this.prisma.note.findUnique({
      where: { id },
    });
  }

  async getNotesByUserId(userId: number): Promise<Note[]> {
    return this.prisma.note.findMany({
      where: { userId },
    });
  }

  async getAllNotes(): Promise<Note[]> {
    return this.prisma.note.findMany();
  }

  async updateNote(id: number, data: Prisma.NoteUpdateInput): Promise<Note> {
    return this.prisma.note.update({
      where: { id },
      data,
    });
  }

  async deleteNoteById(id: number): Promise<Note> {
    return this.prisma.note.delete({
      where: { id },
    });
  }
}
