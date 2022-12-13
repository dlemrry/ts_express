import { pushRetentionArgument } from "@redis/time-series/dist/commands";
import express, { Request, Response, NextFunction } from "express";
// import { UserInfo } from "../entity/entitytypes";
// const { get, set } = require("../utils/redis");
// const { getusers, setuser, getuserinfo } = require("../utils/typeormutil");

const articleRouter = require("./article");
import { getusers, setuser, getuserinfo } from "../service/user.service";
const axios = require("axios");
const userRouter = express.Router();
const { login, verify, auth } = require("../utils/jwtutil");

userRouter.use("/:userid/article", articleRouter);

userRouter.get("/", auth, async (req: Request, res: Response) => {
  //header token verified...
  const userinfo = await getuserinfo(req.body.userid);
  console.log(JSON.stringify(userinfo));
  res.status(200).send(userinfo);
});

userRouter.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  const isExist = await getuserinfo(req.body.userid);
  //check duplicate id
  if (!isExist) {
    const result = await setuser(req.body);
    console.log(result);
    res.status(200).send(result);
  } else {
    console.log("id duplicate");
    res.status(401).send("userid duplicate");
  }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  //로그인
  console.log(req.body.userid);
  const userinfo: any = await getuserinfo(req.body.userid);
  if (userinfo.userid == req.body.userid && userinfo.pw == req.body.pw) {
    const token = login(req.body);
    res.cookie("token", token);
    res.status(200).send("login success");
  } else {
    res.status(403).send("invalid user info");
  }

  //console.log(result);
});

module.exports = userRouter;
