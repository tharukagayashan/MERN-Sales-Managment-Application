const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;
const DBURL = process.env.DBURL;

mongoose.connect(DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
});

//Routes

//

app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`);
});