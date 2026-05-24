import mongoose, { Schema } from "mongoose";
const selfusermodel = new Schema({
  username:
  {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required:true
  },
  photo:{
    type:String //claudinary url
  }
},
{
  timestamps: true
})

export const userModel = mongoose.model('Selfuser', selfusermodel)