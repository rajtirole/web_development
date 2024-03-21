import express, { json } from 'express'
import { config }from 'dotenv'
import userRoutes from './Routes/user/userRoute.js'
import jobRoutes from './Routes/jobs/job.route.js'
config()
const app=express()
app.use(json())
const port=process.env.PORT||5300
app.get('/test',(req,res)=>{
    console.log('server running');
    res.status(200).json({
        success:true,
        message:'server running'
    })
})

// app.use('/api/v1/user',(userRoutes=>{
//     console.log('user route');
// }))
app.use('/api/v1/user/',userRoutes)
app.use('/api/v1/job',jobRoutes)
export default app;