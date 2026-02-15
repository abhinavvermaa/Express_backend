import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
dotenv.config()

const app = express();

const port = process.env.port || 4000;
// app.use(cors())
app.use(express.static('dist'))
// app.get('/',(req,res)=>{
//   res.send("This is the api which is running ")
// })

app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      "id": 1,
      "type": "programming",
      "joke": "Why do programmers prefer dark mode? Because light attracts bugs."
    },
    {
      "id": 2,
      "type": "general",
      "joke": "Why dont scientists trust atoms? Because they make up everything."
    },
    {
      "id": 3,
      "type": "technology",
      "joke": "Why did the computer go to the doctor? Because it caught a virus."
    },
    {
      "id": 4,
      "type": "math",
      "joke": "Why was the math book sad? Because it had too many problems."
    },
    {
      "id": 5,
      "type": "food",
      "joke": "Why did the tomato turn red? Because it saw the salad dressing."
    }
  ]

  res.send(jokes)
})
app.listen(port,(req,res)=>{
  console.log("this is the server running")
})
