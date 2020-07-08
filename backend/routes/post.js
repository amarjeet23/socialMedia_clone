const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const Post = require("../models/post");

const requirelogin = require("../middleware/requireSignin");




router.post("/createpost", requirelogin, async(req, res) => {
    const{title,body} = req.body
    try{
        if(!title || !body){
            res.status(422).json({error:"All field are required"})
        }
        console.log(req.user)
        const post = await new Post({
            title,
            body,
            postedBy:req.user
        })
        const newpost = await post.save();
        res.status(200).json({newpost})

    }
    catch(err){
        res.json({err})
    }
  });




  module.exports = router;