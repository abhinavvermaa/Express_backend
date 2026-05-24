import mongoose from 'mongoose'

const connectDb = async ()=>{
  try{
    await mongoose.connect(`${process.env.DB_URI}/videotube`)
    console.log("DB connected");
    
  }
  catch(error){
    console.log(error)
  }
}

export default connectDb