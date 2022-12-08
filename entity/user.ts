import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Message } from "./message";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Column()
  userid?: string;

  @Column()
  name?: string;

  @Column()
  pw?: string;
}
