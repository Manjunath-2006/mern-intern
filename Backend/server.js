const express=require("express");
const cors=require("cors");
const server=express();
require("dotenv").config();
const mongoose=require("mongoose");

server.use(cors());
server.use(express.json());
server.use("/api/users",require("./routes/userroute"));
server.use("/api/memes",require("./routes/memeroute"));

mongoose.connect(process.env.MONGO_URL||"mongodb://localhost:27017/memedb").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error:",err);
});

server.get('/',(req,res)=>{
    res.json({message:"Meme Generator API Running"})
});

server.listen(4001,()=>console.log("Server running on port 4001"));