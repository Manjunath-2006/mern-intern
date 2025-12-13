const User=require("../models/user");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
exports.registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;

        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,
            email,      
            password:hashedPassword
        });
        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET||'meme_secret_key_2024',{expiresIn:'7d'});
        res.status(201).json({message:"User registered successfully",token,user:{id:user._id,name:user.name,email:user.email}});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
};
//Login user
exports.loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET||'meme_secret_key_2024',{expiresIn:'7d'});
        res.status(200).json({message:"Login successful",token,user:{id:user._id,name:user.name,email:user.email}});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
};
//Get all users
exports.getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }  
};
//Get user by ID
exports.getUserById=async(req,res)=>{      
    try{
        const user=await User.findById(req.params.id);  
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
};