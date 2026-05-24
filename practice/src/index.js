import app from "../src/app.js";

import connectDb from "./Database/db.js";

connectDb().then(app.listen(process.env.PORT, ()=>{
  console.log("server is running");
}))


app.get("/",(req,res)=>{
  res.send("The start")
})



 