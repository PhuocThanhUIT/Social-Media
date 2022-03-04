const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

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

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(8800,()=>{
    console.log("Backend sever running");
})