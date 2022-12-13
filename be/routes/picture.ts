import express, { Request, Response, NextFunction } from "express";
// const { get ,set} = require('../utils/redis');
const router = express.Router({ mergeParams: true });

router.get("/", (req: Request, res: Response) => {
  res.send("pic info: ");
});

module.exports = router;
