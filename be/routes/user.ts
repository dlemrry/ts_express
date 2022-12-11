import { pushRetentionArgument } from "@redis/time-series/dist/commands";
import express, { Request, Response, NextFunction } from "express";
// const { get, set } = require("../utils/redis");
const { getusers, setuser } = require("../utils/typeormutil");
const axios = require("axios");
const router = express.Router();
const { login, verify } = require("../utils/jwtutil");

router.get("/", async (req: Request, res: Response) => {
  const users = await getusers();
  console.log(JSON.stringify(users));
  res.send(users);
});

router.post("/", async (req: Request, res: Response) => {
  console.log(req.body);

  const result = await setuser(req.body);
  console.log(result);

  res.send(result);
});

router.post("/login", async (req: Request, res: Response) => {
  //로그인
  //console.log(req.body);
  const token = login(req.body);

  //console.log(result);
  res.cookie("token", token);
  res.send();
});

module.exports = router;
