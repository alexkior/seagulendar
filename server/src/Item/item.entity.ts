import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  date: number;

  @Column()
  month: string;

  @Column()
  year: number;

  @Column('jsonb', { nullable: true })
  content: object;

  @ManyToOne(() => Item, (item) => item.children, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  parent: Item;

  @OneToMany(() => Item, (item) => item.parent)
  children: Item[];
}
