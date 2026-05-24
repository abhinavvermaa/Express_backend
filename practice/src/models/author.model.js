import mongoose,{Schema, Types, model} from "mongoose";

const authorSchema = new Schema({
  username:{
    type: String,
    required: true,
    uniqure: true,
    lowercase: true
  },
  password:{
    type:String,
    required: true
  },
  books:[
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ],
  email:{
    type: String,
    required:  true,
    lowercase: true,
    unique: true
  }
})

export const Author = mongoose.model('Author', authorSchema)