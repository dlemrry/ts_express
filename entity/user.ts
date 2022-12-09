import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column()
  userid?: string;

  @Column()
  name?: string;

  @Column()
  pw?: string;
}
