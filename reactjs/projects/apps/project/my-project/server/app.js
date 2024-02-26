import { config } from 'dotenv'
import express from 'express'
import multer from 'multer'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import erroMiddleware from './middlewares/error.middleware.js'
import userRoutes from './routes/user.routes.js'
import dashboardRoutes from './routes/dashboardRoutes.js'

import  course from './routes/course.js'
import formidable from  'express-formidable';
// const cors = require('cors');
// const allowedOrigins = ["http://TheCodebuzz.com", "http://TheCodebuzz.test.com","http://localhost:3000/","http://localhost:300","http://localhost:5400","http://localhost:300","http://localhost/:10"];
const allowedOrigins= ["http://localhost:3000","http://localhost:300"];

config();
// const PORT=process.env.PORT;
// console.log(PORT);
const app = express();
// app.use(cors())
// app.use(cors({
//     origin: function (origin, callback) {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// }));
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
// console.log(req.body);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/ping',(req,res)=>{
    res.send('pong server');
    
})

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/dashboard',dashboardRoutes)
// app.use('/api/v1/dashboard',()=>{
//     console.log('get dashboard routes');
// })
// app.use('/api/v1/course',course)
// app.use('/api/v1/user',()=>{
//     console.log("fjdkjflk");
// })






app.all('*',(req,res)=>{
    res.status(500).send('page not have any')
    
})
app.use(erroMiddleware)
export default app;