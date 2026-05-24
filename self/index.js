import mongoose, { connect } from "mongoose";
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
dotenv.config()
const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json())


app.get('/',(req,res)=>{
  res.send("come on")
})


import routers from './routes.js'
app.use("/api",routers)



const connectDB = async ()=>{
  try{
   await mongoose.connect(`${process.env.MONGODB_URI}/videotube`)
   console.log("Database connected !!")
  }
  catch(error){
    console.log("mongodb connection error")
    process.exit(1)
  }
}
connectDB().then(()=>{
  app.listen(process.env.PORT, (req, res)=>{
    console.log("server is running at port:",process.env.PORT)
  })
}).catch((error)=>{
  console.log(error)
})

