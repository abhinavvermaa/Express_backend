import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try{

    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    console.log(`\n Mongo DB connected succesfully!! DB host : ${conn.connection.host}`);
  }
  catch(error){
    console.log(`Mongo DB connection Error`, error);
    process.exit(1)
  }
}
export default connectDB