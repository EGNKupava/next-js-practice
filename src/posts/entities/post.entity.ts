import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  user_id: string;

  @Column({ nullable: true, default: null })
  description?: string;

  @Column({ nullable: true, default: null })
  image_url?: string;
}
