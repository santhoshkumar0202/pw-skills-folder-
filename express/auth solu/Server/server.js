require("dotenv").config()
const express = require("express");

const connectDatabase = require("./config/db");
const { userRoute } = require("./routes/user.route");
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser")

app.use(cors({
  origin: ["http://localhost:5500", "http://127.0.0.1:5500"], // Allow both origins
  credentials: true,
}))
app.use(cookieParser())

app.use(express.json())
app.use("/",userRoute)
console.log(process.env.PORT)


app.listen(process.env.PORT,async()=>{
  connectDatabase()
    console.log("Server Starting on PORT :",process.env.PORT)
})