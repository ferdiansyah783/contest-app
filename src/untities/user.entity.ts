import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    name: 'user_id',
    type: 'bigint',
  })
  id: number;

  @Column('varchar', { length: 50 })
  username: string;

  @Column({
    unique: true,
    length: 50,
  })
  email: string;

  @Column('varchar', { length: 50 })
  password: string;

  @Column({ nullable: true })
  photo_profil?: string;

  @Column({ nullable: true })
  background_photo?: string;

  @Column('text', { nullable: true })
  about?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
