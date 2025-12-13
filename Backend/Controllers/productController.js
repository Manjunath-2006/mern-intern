const Product=require('../models/product');

exports.createproduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.json(product);
        res.status(200);
    }
    catch(err){
        res.status(500).json({error:err.message}); 
    }
}