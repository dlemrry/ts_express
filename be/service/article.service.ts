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
  const article = await Article.create({
    title: title,
    content: content,
    writer: userid,
  }).save();
  return article;
};

const getuserarticles = async (userid: string) => {
  const articles = await Article.find({ where: [{ writer: userid }] });

  return articles;
};

const deletearticle = async (userid: string) => {
  const result = await Article.delete({ writer: userid });
  return result;
};

export { getarticles, writearticle, getuserarticles, deletearticle };
