import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(Number(id));
  }

  @Get('tg/:tg')
  getUserByTg(@Param('tg') tg: string): Promise<User | null> {
    return this.userService.getUserByTg(tg);
  }

  @Post()
  createUser(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateData: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.updateUser(Number(id), updateData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(Number(id));
  }
}
