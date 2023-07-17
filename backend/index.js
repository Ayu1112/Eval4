const express=require("express");
const bcrypt=require('bcrypt');
const {connection}=require('./db');
const {rateLimit}=require('express-rate-limiter');

require('dotenv').config()
const app=express();
app.use(express.json());

app.get('/regeneratetoken',(req,res)=>{
    const rToken=req.headers.authorization?.split(" ")[1];
    const decoded=jwt.verify(rToken,"school");
    if(decoded){
        const token=jwt.sign({course:"nxm"},"masai",{
            expiresIn:300
        })
    }else{
        res.json({msg:"not valid"})
    }
})

app.listen(process.env.port,rateLimit,async()=>{
    try {
        await connection
        console.log(`listening on port ${process.env.port}`);
        console.log('connected to db');
    } catch (err) {
        console.log(err);
        console.log('something went wrong');
    }
})

