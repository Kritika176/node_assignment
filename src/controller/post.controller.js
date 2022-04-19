const express = require("express");
const router  = express.Router();
const Posts = require("../models/post.model");


router.get("",async(req,res) => {
    try{
        
        const post = await Posts.find().lean().exec();
        
      return res.status(200).send(post);
    }
    catch(err){
        res.status(400).send({msg:err.message})
    }
    })
    

    router.post("",async(req,res) => {

        try{
        const post = await Posts.create(req.body);
        console.log(post)
        return res.status(200).send(post);
        }
        catch(err){
            res.status(400).send({msg:err.message});
        }
    })
    module.exports = router;