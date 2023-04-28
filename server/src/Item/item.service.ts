import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async create(item: Item): Promise<Item> {
    return this.itemRepository.save(item);
  }

  async update(item: Item): Promise<Item> {
    return this.itemRepository.save(item);
  }

  async delete(item: Item): Promise<Item> {
    return this.itemRepository.remove(item);
  }

  async findById(id: number): Promise<Item> {
    return this.itemRepository.findOneBy({ id: id });
  }
}
