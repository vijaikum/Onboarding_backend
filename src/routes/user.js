const express = require("express");
const userRouter = express.Router();
const User = require('../model/Users');

userRouter.get('/', async (req, res) => {
    try{
        const user = await User.find();
        res.json(user);
    }catch(err){
        res.json({message : errs});
    }
});

userRouter.post('/auth', async (req, res)=>{
    try{
        const user = await User.find(
            {
                userId : req.body.userId,
                password : req.body.password
            }
        );
        if(user.length > 0){
            res.json({"authenticated": "true", "roles" : user[0].roles});
        }else
        {
            res.json({"authenticated": "false"})
        }
        //res.json(user);
    }catch(err){
        res.json({message : errs});
    }
   
});

module.exports = userRouter;