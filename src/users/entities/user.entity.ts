import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: true, default: null })
  description?: string;

  @Column()
  subscriptions: string[];

  @Column()
  followers: string[];
}
