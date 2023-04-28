import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemService.create(item);
  }
}
