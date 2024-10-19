const router = require ("express").Router();
const User = require ("../models/User");
const bcrypt = require ("bcrypt");

//Register

router.post("/register", async(req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassed= await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassed,
        })
        const user = await newUser.save();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Login

router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
       if (!user) return res.status(404).json("User does not exist")

        const validated = await bcrypt.compare(req.body.password, user.password)
        if (!validated) return res.status(401).json("Password is incorrect")

        const {password, ...others}= user._doc;
        res.status(200).json(others)
    }
    catch(err){
        console.log(err)
        res.status(500).json("Something went wrong")
    }
})


module.exports= router;