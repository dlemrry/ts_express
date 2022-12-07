//const express = require('express'); 
import  express , { Request, Response, NextFunction }from 'express';
const app = express();
const port = 8080; 


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`express server start`);
});
//시작 명령어 : npm start