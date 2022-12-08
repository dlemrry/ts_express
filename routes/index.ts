//const express = require('express');
import  express , { Request, Response, NextFunction }from 'express';
const { get ,set} = require('../utils/redis');

const router = express.Router();
 
router.get('/', (req:Request, res:Response) => {
    res.send('Hello, World !');
});
 
module.exports = router;