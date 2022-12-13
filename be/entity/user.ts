import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Article } from "./article";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: string;

  @Column()
  name: string;

  @Column()
  pw: string;

  @OneToMany(() => Article, (article) => article.user, {
    cascade: true,
  })
  article: Article[];
}
