const { auth } = require("./utils/jwtutil");
import express, { Request, Response, NextFunction } from "express";
const app = express();
const cors = require("cors");
const port = 8080;
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const articleRouter = require("./routes/article");
const pictureRouter = require("./routes/picture");
import { getarticles } from "./service/article.service";
import { getpictures } from "./service/picture.service";
app.use(cors());
app.use(cookieParser());
app.use(express.json()); //use built in body-parser
app.use("/user", userRouter);

app.use((req: Request, res: Response) => {
  // 기본경로나 /user말고 다른곳 진입했을경우 실행

  res.status(404).send("Not Found");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World !");
});
app.get("/articles", auth, async (req: Request, res: Response) => {
  const articles = await getarticles();
  res.status(200).send(articles);
});
app.get("/pictures", auth, async (req: Request, res: Response) => {
  const pictures = await getpictures();
  res.status(200).send(pictures);
});

//시작 명령어 : npm start

export default app;
