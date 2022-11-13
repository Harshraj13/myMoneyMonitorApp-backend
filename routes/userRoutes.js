const express = require('express')
const User = require("../model/User")
const router = express.Router();

router.post('/login',async function(req,res){
    try{
        const result = await User.findOne({
            email:req.body.email,
            password:req.body.password
        });
        if(result){
            res.send(result);
        }else{
            res.status(500).json("Error")
        }
    }catch(err){
        res.status(500).json(err);
    }
});

router.post("/register",async function(req,res){
    try{
        const newUser = new User(req.body)
        await newUser.save();
        res.send('User registered Successfully')
    }catch(err){
        res.status(500).json(err)
    }
})
router.get('/test-api',async function(req,res){
    res.send("Api status code 200")
})
module.exports = router