import { User } from "../entity/user";
import express, { Request, Response, NextFunction } from "express";
import { writearticle } from "../service/article.service";
import { getuserinfo } from "../service/user.service";
// const { get ,set} = require('../utils/redis');
const articleRouter = express.Router({ mergeParams: true });
const { auth } = require("../utils/jwtutil");
const { getarticles } = require("../service/article.service");
const pictureRouter = require("./picture");

articleRouter.use("/:articleid/picture", pictureRouter);

articleRouter.get("/", auth, async (req: Request, res: Response) => {
  //get all articles of user
  const articles = await getarticles();
  res.send(articles);
});
articleRouter.post("/", auth, async (req: Request, res: Response) => {
  //create article
  console.log("creating article...");

  const title = req.body.title;
  const content = req.body.content;
  const userid: any = req.params.userid;
  console.log("your id is : " + userid);
  //const article = {title: req.body.title, content: req.body.content, writer: req.body.userid}
  const result = await writearticle(userid, title, content);
  res.send(result);
});
articleRouter.delete("/", auth, (req: Request, res: Response) => {
  //delete all article of user
});

module.exports = articleRouter;
