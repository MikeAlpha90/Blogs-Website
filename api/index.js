const express = require ("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer");


// environment configuration
dotenv.config();
//middleware
app.use(express.json());

//MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB"))
.catch((err)=>console.log(err))

//File Upload
const apiStorage = multer.diskStorage({
    filename: (req, file, cb)=>{
        cb(null, Date.now() + "_" + file.originalname);
    },
    destination: (req, file, cb)=>{
        cb(null, "images")
    }
});
const upload = multer({storage: apiStorage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("Faile has been uploaded")
})

//Route level Middleware
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute)


app.listen(process.env.PORT, ()=>{
    console.log("Listning to Port", process.env.PORT)
})
