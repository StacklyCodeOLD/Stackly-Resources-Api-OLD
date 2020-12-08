import {
  BaseEntity,
  Column,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  full_name: string;

  @Column({ type: 'varchar', length: 40, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  nickname: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  password: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @ManyToMany((type) => Rol, (rol) => rol.users, { eager: true })
  @JoinTable({ name: 'user_roles' })
  roles: Rol[];
}
