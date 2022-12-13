import { ConnectionOptions, createConnection } from "typeorm";
import { DataSource } from "typeorm";
import { root } from "./paths";
import { User } from "../entity/user";
const sqlite3 = require("sqlite3").verbose();
import { myDataSource } from "./data-source";
import "reflect-metadata";

import { UserInfo } from "../entity/entitytypes";

myDataSource
  .initialize()
  .then(() => {
    console.log("sqlite db initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

export default myDataSource;
