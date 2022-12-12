import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./user";
import { Picture } from "./picture";
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne((type) => User, (user) => user.article)
  user: User;

  @OneToMany((type) => Picture, (picture) => picture.article)
  picture: Picture[];
}
