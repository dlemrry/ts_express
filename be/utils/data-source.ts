import { DataSource } from "typeorm";
import { User } from "../entity/user";

export const myDataSource = new DataSource({
  type: "sqlite",
  database: `data/bvdb.sqlite`,
  synchronize: true,
  //   database: "bvdb",
  entities: [User],
  logging: true,
  subscribers: [],
  migrations: [],
});
