import { DataSource } from "typeorm";
import { User } from "../entity/user";
import { Article } from "../entity/article";
import { Picture } from "../entity/picture";

const myDataSource = new DataSource({
  type: "sqlite",
  database: `:memory:`,
  synchronize: true,
  //   database: "bvdb",
  entities: [User, Article, Picture],
  logging: true,
  subscribers: [],
  migrations: [],
});
const testDataSource = new DataSource({
  type: "sqlite",
  // database: `data/bvdbtest.sqlite`,
  database: `:memory:`,
  synchronize: true,
  //   database: "bvdb",
  entities: [User, Article, Picture],
  logging: true,
  subscribers: [],
  migrations: [],
});

export { myDataSource, testDataSource };
