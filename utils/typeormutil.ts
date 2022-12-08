import { ConnectionOptions, createConnection } from "typeorm";
import { root } from "./paths";
import { User } from "../entity/user";
import { Message } from "../entity/message";

const options: ConnectionOptions = {
  type: "sqlite",
  database: `${root}/data/line.sqlite`,
  entities: [User, Message],
  logging: true,
};
const connection = createConnection(options).then();

const messageRepository = connection.getRepository(Message);

const get = async (key: string) => {
  const messages = await messageRepository
    .createQueryBuilder("ZMESSAGE")
    .leftJoinAndSelect("ZMESSAGE.sender", "ZUSER")
    .where("ZMESSAGE.Z_PK=:id")
    .setParameter("id", 3)
    .getMany();

  return;
};
