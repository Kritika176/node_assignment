const express = require("express");
const mongoose = require("mongoose");
const postController = require("./controller/post.controller");
const rateLimit = require("express-rate-limit")
const app = express();

app.use(express.json());
const limiter = rateLimit({
    max: 5,
    windowMs:10000
})


app.use("/post",limiter,postController);

const connect =  async() => {
    try  {
        return  mongoose.connect(
            "mongodb+srv://kritika176:kritika@cluster0.4hoe3.mongodb.net/blog?retryWrites=true&w=majority"
         )
    }
    catch(err){
        console.log("connection error")
    }
        }


        app.listen(8080,async() => {
            try{
              await  connect();
                console.log("connected to port 8080")
            }
            catch(err){
                console.log(err.message)
            }
        })     