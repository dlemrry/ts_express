import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Article } from "./article";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: string;

  @Column()
  name: string;

  @Column()
  pw: string;

  @OneToMany((type) => Article, (article) => article.user)
  article: Article[];
}
