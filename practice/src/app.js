import express from "express"
import router from "./routes/Books.routes.js"
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use('/api/v1', router)

export default app

