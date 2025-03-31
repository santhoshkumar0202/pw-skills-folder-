// // // let express=require("express")
// // // let mongoose=require("mongoose")

// // // const app=express()
// // // const port=3000
// // // let path="mongodb+srv://user123:user123@cluster0.k1ed9.mongodb.net/";
// // // (async()=>{
// // //     await mongoose.connect(path).then(
// // //     ()=>{console.log("db conneted")}).catch((err)=>{console.log("errrr")})
// // // })()

// // // app.get("/",(req,res)=>{
// // //     res.send("hello")
// // // })

// // // app.listen(port,()=>{
// // //     console.log("listening at ");
    
// // // })

// // let express = require("express");
// // let mongoose = require("mongoose");

// // const app = express();
// // const port = 3000;

// // // MongoDB Atlas connection string
// // let path = `mongodb+srv://user123:user123@cluster0.k1ed9.mongodb.net/`;

// // (async () => {
// //     try {
// //         await mongoose.connect( `mongodb+srv://user123:user123@cluster0.k1ed9.mongodb.net/`)
// //         console.log("DB connected");
// //     } catch (err) {
// //         console.error("Error connecting to DB:", err);
// //     }
// //  })()

// // app.get("/", (req, res) => {
// //     res.send("Hello, world!");
// // });

// // // app.listen(port, () => {
// // //     console.log(`Listening at http://localhost:${port}`);
// // // });



// import app from "./app.js";
// import mongoose from "mongoose";

// //const app = express();
// const port = 3000;

// // MongoDB Atlas connection string
// let path = `mongodb+srv://user123:user123@cluster0.k1ed9.mongodb.net/`;

// (async () => {
//     try {
//         // Wait for DB connection to be established
//         await mongoose.connect("mongodb+srv://user123:user123@cluster0.k1ed9.mongodb.net")
//         console.log("DB connected");

//         // Start the Express server after DB connection is successful
//         app.listen(port, () => {
//             console.log(`Server running at http://localhost:${port}`);
//         });
//     } catch (err) {
//         console.error("Error connecting to DB:", err);
//     }
// })();

// // Define a basic route


import app from './app.js';
import mongoose from 'mongoose';

const port = 6003;

// Database connection
(async () => {
    try {
        // Connecting to MongoDB
        await mongoose.connect("mongodb+srv://user123:user123@cluster0.k1ed9.mongodb.net/")
        console.log("DB connected successfully");

        // Start the server after successful DB connection
        // app.listen(port, () => {
        //     console.log(`Server is running on port ${port}`);
        // });

    } catch (err) {
        console.error("ERROR: Could not connect to the database", err);
        // Handle error here or gracefully shutdown
    }
})();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});