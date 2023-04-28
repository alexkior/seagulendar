import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './Item/item.entity';
import { ItemController } from './Item/item.controller';
import { ItemService } from './Item/item.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'seagulendar_admin',
      password: 'seagull',
      database: 'seagulendar_db',
      entities: [Item],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
