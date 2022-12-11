import { pushRetentionArgument } from "@redis/time-series/dist/commands";
import express, { Request, Response, NextFunction } from "express";
// const { get, set } = require("../utils/redis");
const { getusers, setuser, getuserinfo } = require("../utils/typeormutil");
const axios = require("axios");
const router = express.Router();
const { login, verify, auth } = require("../utils/jwtutil");

router.get("/", auth, async (req: Request, res: Response) => {
  //header token verified...
  const userinfo = await getuserinfo(req.body.userid);
  console.log(JSON.stringify(userinfo));
  res.send(userinfo);
});

router.post("/", async (req: Request, res: Response) => {
  console.log(req.body);

  const result = await setuser(req.body);
  console.log(result);

  res.send(result);
});

router.post("/login", async (req: Request, res: Response) => {
  //로그인
  console.log(req.body.userid);
  const userinfo = await getuserinfo(req.body.userid);
  if (userinfo.userid == req.body.userid && userinfo.pw == req.body.pw) {
    const token = login(req.body);
    res.cookie("token", token);
    res.send();
  } else {
    res.status(403).send("invalid user info");
  }

  //console.log(result);
});

module.exports = router;
