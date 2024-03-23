import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import { configDotenv } from "dotenv";
import express from 'express'
import connectToDB from './config/db.js'
// import { error } from "console";

configDotenv()
console.log(process.env.MONGODB_URL);
connectToDB()
const app=express()
//moongose connection 
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log(error);
//             throw error
//         })
//         const PORT=process.env.PORT||5500
//         app.listen(PORT,()=>{
//             console.log('server listening on port ',PORT);
//         })

//     } catch (error) {
//         console.log(error);
//         throw error
        
//     }
// })()