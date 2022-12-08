//const express = require('express');
import express, { Request, Response, NextFunction } from "express";
const app = express();
const cors = require("cors");
const port = 8080;

const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const articleRouter = require("./routes/article");
const pictureRouter = require("./routes/picture");

app.use(cors());
app.use(express.json()); //user built in body-parser
app.use("/", indexRouter); // 각기 다른 경로에 미들웨어 장착
app.use("/user", userRouter);
app.use("/article", articleRouter);
app.use("/picture", pictureRouter);

app.use((req, res, next) => {
  // 기본경로나 /user말고 다른곳 진입했을경우 실행
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`express server start`);
});
//시작 명령어 : npm start
