const mongoose=require("mongoose");

const memeSchema=new mongoose.Schema({
  title:{type:String,required:true},
  imageUrl:{type:String,required:true},
  texts:[{
    content:String,
    x:Number,
    y:Number,
    fontSize:Number,
    color:String
  }],
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
},{timestamps:true});

module.exports=mongoose.model('Meme',memeSchema);