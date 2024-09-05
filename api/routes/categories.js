const router = require("express").Router();
const category = require("../models/Category");

//Post a Catergory
router.post("/", async(req, res)=>{
    const newCategory = new category(req.body)
    try{
        const savedCat= await newCategory.save();
        res.status(200).json(savedCat)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get all Categories
router.get("/", async(req,res)=>{
    try{
        const Cats = await category.find()
        res.status(200).json(Cats)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;