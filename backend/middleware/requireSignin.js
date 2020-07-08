// const express = require('express')
// const router = express.Router()
const User = require("../models/user")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

module.exports =(req,res,next)=>{
    const {authorization } = req.headers
    if(!authorization){
        return res.status(401).json({error:"you must have logged in "})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.secret,(err,payload)=>{
        if(err){
           return  res.status(401).json({error:"you must be logged in"})
        }
        const {_id} = payload
        console.log(payload)
        User.findById(_id).then(userdata=>{
            console.log(userdata)
            req.user = userdata
            next();
            
        })
       
        
    })
}