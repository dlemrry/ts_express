import { DataSource } from "typeorm";
import { User } from "../entity/user";

const myDataSource = new DataSource({
  type: "sqlite",
  database: `data/bvdb.sqlite`,
  synchronize: true,
  //   database: "bvdb",
  entities: [User],
  logging: true,
  subscribers: [],
  migrations: [],
});
const testDataSource = new DataSource({
  type: "sqlite",
  database: `data/bvdbtest.sqlite`,
  synchronize: true,
  //   database: "bvdb",
  entities: [User],
  logging: true,
  subscribers: [],
  migrations: [],
});

export { myDataSource, testDataSource };
