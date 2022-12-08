import { ConnectionOptions, createConnection } from "typeorm";
import { root } from "./paths";
import { User } from "../entity/user";
import { Message } from "../entity/message";
const sqlite3 = require("sqlite3").verbose();

import { UserInfo } from "../entity/entitytypes";

//top level async
(async () => {
  // open sqlite in memory
  let db = new sqlite3.Database(":memory:", (err: any) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the in-memory SQlite database.");
  });

  const options: ConnectionOptions = {
    type: "sqlite",
    //   database: `${root}/data/line.sqlite`,
    database: db,
    entities: [User, Message],
    logging: true,
  };

  const connection = await createConnection(options);

  const userRepository = connection.getRepository(User);

  const getusers = async (userid: string) => {
    const users = await userRepository.find();

    return users;
  };
  const setuser = async (userinfo: UserInfo) => {
    const user = await userRepository.create(userinfo);
    const results = await userRepository.save(user);
    return results;
  };

  module.exports = {
    setuser,
    getusers,
  };
})();
