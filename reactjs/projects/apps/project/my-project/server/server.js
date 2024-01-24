import { config }from 'dotenv'
import db from './config/dbConnection.js'
config();
import app from './app.js'
import cloudinary from 'cloudinary'
cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})
const PORT=process.env.PORT||5300
console.log(PORT);
app.listen(5400,async()=>{  
    await db()
    console.log(`app listen on ${PORT}`);
})