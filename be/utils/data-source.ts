import { DataSource } from "typeorm";
import { User } from "../entity/user";

const myDataSource = new DataSource({
  type: "sqlite",
  database: `:memory:`,
  synchronize: true,
  //   database: "bvdb",
  entities: [User],
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
  entities: [User],
  logging: true,
  subscribers: [],
  migrations: [],
});

export { myDataSource, testDataSource };
