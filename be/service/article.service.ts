import { User } from "../entity/user";
import { Article } from "../entity/article";
import myDataSource from "../utils/typeormutil";
import "reflect-metadata";
import { UserInfo } from "../entity/entitytypes";

const getarticles = async () => {
  const articleRepository = await myDataSource.getRepository(Article);
  const articles = await articleRepository.find();
  return articles;
};

const writearticle = async (userid: string, title: string, content: string) => {
  // const user: any = await User.findOne({ where: { userid: userid } });
  const article = await Article.create({
    title: title,
    content: content,
    writer: userid,
  }).save();
  return article;

  // const userRepository = await myDataSource.getRepository(User);
  // const user = await userRepository.findOneBy({
  //   userid: userid,
  // });
  // const articleRepository = await myDataSource.getRepository(Article);
  // await articleRepository
  //   .createQueryBuilder()
  //   .insert()
  //   .into(Article)
  //   .values([{ title: "aa", content: "bb" }])
  //   .execute();
  // await articleRepository
  //   .createQueryBuilder()
  //   .relation(User, "article")
  //   .of(user);
};

const getuserarticles = async () => {
  const articleRepository = await myDataSource.getRepository(Article);
  const articles = await articleRepository.find();
  return articles;
};

export { getarticles, writearticle };
