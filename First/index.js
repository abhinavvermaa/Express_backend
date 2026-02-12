const express = require("express")
require('dotenv').config()
const app = express()
const port = process.env.port

app.get("/", (req,res)=>{
  res.send("this is the home api")
})

app.get('/random',(req,res)=>{
  res.send("<h1> this is the random page created to test api's </h1>")
})

app.listen(port , ()=>{
  console.log(`hi the port is running on ${port}`)
})