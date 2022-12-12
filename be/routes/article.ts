import express, { Request, Response, NextFunction } from "express";
// const { get ,set} = require('../utils/redis');
const router = express.Router();
const { auth } = require("../utils/jwtutil");
const { getusers, setuser, getuserinfo } = require("../utils/typeormutil");
router.get("/", auth, (req: Request, res: Response) => {
  //get all articles title, id

  res.send("article info:");
});

module.exports = router;
