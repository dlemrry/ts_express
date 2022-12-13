import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./user";
import { Picture } from "./picture";
@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  writer: string;
  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.article)
  // @JoinColumn({ name: "writer" })
  user: User;

  @OneToMany(() => Picture, (picture) => picture.article, {
    cascade: true,
  })
  picture: Picture[];
}
