import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { Article } from "./article";
@Entity()
export class Picture extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  articleid: number;

  @ManyToOne(() => Article, (article) => article.picture)
  @JoinColumn({ name: "articleid" })
  article: Article;
}
