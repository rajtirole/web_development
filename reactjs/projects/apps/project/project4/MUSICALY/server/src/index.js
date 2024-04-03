import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import { configDotenv } from "dotenv";
import connectToDB from './config/db.js'
import app from "./app.js";

configDotenv()
const PORT=process.env.PORT||5300

//moongose connection 
connectToDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("app listening on port ",PORT);
    })
}).catch((error)=>{
    console.log('mongodb connection error',error);
})
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