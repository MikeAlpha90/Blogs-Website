const express = require ("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB"))
.catch((err)=>console.log(err))

app.listen(process.env.PORT, ()=>{
    console.log("Listning to Port", process.env.PORT)
})
