import { User } from "../entity/user";
import { Article } from "../entity/article";
import myDataSource from "../utils/typeormutil";
import "reflect-metadata";
import { UserInfo } from "../entity/entitytypes";
import { Picture } from "../entity/picture";
const getpictures = async () => {
  const pictureRepository = await myDataSource.getRepository(Picture);
  const pictures = await pictureRepository.find();
  return pictures;
};

export { getpictures };
