import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})
connectDB()
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("the server is running at port: ",process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error is theere");
  });
app.get("/", (req, res) => {
  res.send("this is the home page");
});
