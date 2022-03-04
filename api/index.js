const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();
connectDB();

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connect db success');
      } catch (error) {
        console.log(error);
      }
}

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
    res.send("Welcom to home");
})

app.listen(8800,()=>{
    console.log("Backend sever running");
})
