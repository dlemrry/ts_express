import { User } from "../entity/user";
import myDataSource from "../utils/typeormutil";
import "reflect-metadata";

import { UserInfo } from "../entity/entitytypes";

const getusers = async () => {
  const userRepository = await myDataSource.getRepository(User);
  const users = await userRepository.find();

  return users;
};

const getuserinfo = async (userid: string) => {
  console.log("fetching info : " + userid);
  const userRepository = await myDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    userid: userid,
  });

  return user;
};

const setuser = async (userinfo: UserInfo) => {
  const userRepository = await myDataSource.getRepository(User);
  const user = await userRepository.create(userinfo);
  const result = await userRepository.save(user);
  return result;
};
export { setuser, getusers, getuserinfo };
