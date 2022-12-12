import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Article } from "./article";
@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne((type) => Article, (article) => article.picture)
  article: Article;
}
