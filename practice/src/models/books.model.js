import mongoose, { Model, Schema } from "mongoose";

const booksSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  author:{
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  coverImage:{
    type: String
  }
},
{
  timestamps: true
})

export const Book = mongoose.model('Book', booksSchema)