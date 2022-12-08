import { pushRetentionArgument } from '@redis/time-series/dist/commands';
import  express , { Request, Response, NextFunction }from 'express';
const { get ,set} = require('../utils/redis');
const axios = require('axios');
const router = express.Router();
 
router.get('/:userid', async (req:Request, res:Response) => {
    let data = await get(req.params.userid);
    if(data){
        console.log("redis get ok: " +JSON.stringify(data));
        res.status(200).send({data: data});
    }else{
        console.log("redis get fail")
        res.status(500).send({ error: 'data get failed' });
    }
    
    // res.send(data);
});

router.post('/', async (req:Request, res:Response) => {
    console.log(req.body);
    let result = await set(req.body.userid, req.body.val); 
    if(result=='OK'){
        console.log("redis set ok")
        res.status(200).send({data: result});
    }else{
        console.log(result)
        res.status(500).send({ error: 'data set failed' });
    }
    
    // res.send(data);
});


module.exports = router;