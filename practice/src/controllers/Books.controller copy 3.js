import { Book } from "../models/books.model.js"
import { Author } from "../models/author.model.js"
import jwt from 'jsonwebtoken'
const addBook = async(req,res) =>{
  try{
    const {name, author, coverImage} =  req.body;
    if(!name ||!author){
      const error = new Error("All fields are required")
      error.statusCode = 400;
      throw error;
    }
    console.log('hit')

    const existedBook = await Book.findOne({name})
    if(existedBook){
      console.log("yaha")
      const error = new Error("Book already exists")
      error.statusCode = 400;
      throw error;
    }
    const cBook = await Book.create({
      name,
      author,
      coverImage
    })
    const addedBook = await Book.findById(cBook._id)
    if(!addedBook){
      const error = new Error("something went wrong while adding book")
      error.statusCode = 500;
      throw error;
    }
    return res.status(201).json({
      status: 201,
      data: addedBook,
      message: "book added successfully",
      success: true


    })
  }catch(error){
    throw new Error("error while adding book")
  }
}

const RegisterUser = async(req,res)=>{
  try{
    const {username, password, email}= req.body;

    if(!username||!password||!email){
      throw new Error("all fields are required")
    }

    const isUserExists = await Author.findOne({
      $or:[{email, username}]
    })
    if(isUserExists){
            throw new Error("Author Already exists")
    }
    




  }
}

export {addBook}