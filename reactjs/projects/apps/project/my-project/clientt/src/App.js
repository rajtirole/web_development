import { config } from 'dotenv'
import express from 'express'
import multer from 'multer'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import erroMiddleware from './middlewares/error.middleware.js'
import userRoutes from './routes/user.routes.js'
import  course from './routes/course.js'
import formidable from  'express-formidable';

config();
// const PORT=process.env.PORT;
// console.log(PORT);
const app = express();
// const upload=multer();
// app.use(upload.none());
// app.use(express.json())
// const formidable = require('express-formidable');

app.use(express.json());
app.use(express.urlencoded({ extended:true }))    
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(cookieParser())
app.use(morgan('dev')) 
// app.use(cors({
//     origin:[process.env.FRONTEND_URL],
//     credentials:true
// }))
app.get('/ping',(req,res)=>{
    res.send('pong server');
    
})

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/course',course)
// app.use('/api/v1/user',()=>{
//     console.log("fjdkjflk");
// })






app.all('*',(req,res)=>{
    res.status(500).send('page not have any')
    
})
app.use(erroMiddleware)
export default app;