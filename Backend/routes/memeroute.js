const express=require("express");
const router=express.Router();
const auth=require("../middleware/auth");
const{createMeme,getMemes,getMemeById,deleteMeme}=require("../Controllers/memeController");

router.post("/",auth,createMeme);
router.get("/",getMemes);
router.get("/:id",getMemeById);
router.delete("/:id",auth,deleteMeme);

module.exports=router;