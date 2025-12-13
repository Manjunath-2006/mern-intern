const Meme=require("../models/meme");

exports.createMeme=async(req,res)=>{
  try{
    const{title,imageUrl,texts}=req.body;
    const meme=new Meme({title,imageUrl,texts,userId:req.user._id});
    await meme.save();
    res.status(201).json({message:"Meme created",meme});
  }catch(error){
    res.status(500).json({error:error.message});
  }
};

exports.getMemes=async(req,res)=>{
  try{
    const memes=await Meme.find().populate('userId','name email');
    res.json(memes);
  }catch(error){
    res.status(500).json({error:error.message});
  }
};

exports.getMemeById=async(req,res)=>{
  try{
    const meme=await Meme.findById(req.params.id).populate('userId','name email');
    if(!meme)return res.status(404).json({error:"Meme not found"});
    res.json(meme);
  }catch(error){
    res.status(500).json({error:error.message});
  }
};

exports.deleteMeme=async(req,res)=>{
  try{
    await Meme.findByIdAndDelete(req.params.id);
    res.json({message:"Meme deleted"});
  }catch(error){
    res.status(500).json({error:error.message});
  }
};