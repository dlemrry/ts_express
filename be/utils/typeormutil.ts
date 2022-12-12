import { ConnectionOptions, createConnection } from "typeorm";
import { DataSource } from "typeorm";
import { root } from "./paths";
import { User } from "../entity/user";
const sqlite3 = require("sqlite3").verbose();
import { myDataSource } from "./data-source";
import "reflect-metadata";

import { UserInfo } from "../entity/entitytypes";

//top level async
// open sqlite in memory
//   let db = new sqlite3.Database(":memory:", (err: any) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log("Connected to the in-memory SQlite database.");
//   });

// const options: ConnectionOptions = {
//   type: "sqlite",
//   database: `${root}/data/line.sqlite`,
//   // database: db,
//   entities: [User],
//   logging: true,
// };

// const myDataSource = new DataSource({
//   type: "sqlite",
//   database: `${root}/data/line.sqlite`,
//   // database: db,
//   entities: [User],
//   logging: true,
// });

myDataSource
  .initialize()
  .then(() => {
    console.log("sqlite db initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

export default myDataSource;

// const getusers = async () => {
//   const userRepository = await myDataSource.getRepository(User);
//   const users = await userRepository.find();

//   return users;
// };

// const getuserinfo = async (userid: string) => {
//   console.log("fetching info : " + userid);
//   const userRepository = await myDataSource.getRepository(User);
//   const user = await userRepository.findOneBy({
//     userid: userid,
//   });

//   return user;
// };

// const setuser = async (userinfo: UserInfo) => {
//   const userRepository = await myDataSource.getRepository(User);
//   const user = await userRepository.create(userinfo);
//   const result = await userRepository.save(user);
//   return result;
// };
// module.exports = {
//   setuser: setuser,
//   getusers: getusers,
//   getuserinfo: getuserinfo,
// };
