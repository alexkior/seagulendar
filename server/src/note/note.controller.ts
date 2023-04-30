import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note, Prisma } from '@prisma/client';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get(':id')
  getNoteById(@Param('id') id: string): Promise<Note | null> {
    return this.noteService.getNoteById(Number(id));
  }

  @Get('user/:userId')
  getNotesByUserId(@Param('userId') userId: string): Promise<Note[]> {
    return this.noteService.getNotesByUserId(Number(userId));
  }

  @Get()
  getAllNotes(): Promise<Note[]> {
    return this.noteService.getAllNotes();
  }

  @Post()
  createNote(@Body() noteData: Prisma.NoteCreateInput): Promise<Note> {
    return this.noteService.createNote(noteData);
  }

  @Put(':id')
  updateNote(
    @Param('id') id: string,
    @Body() updateData: Prisma.NoteUpdateInput,
  ): Promise<Note> {
    return this.noteService.updateNote(Number(id), updateData);
  }

  @Delete(':id')
  deleteNoteById(@Param('id') id: string): Promise<Note> {
    return this.noteService.deleteNoteById(Number(id));
  }
}
