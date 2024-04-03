import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/user.routes.js'
import tweetRoutes from './routes/tweet.routes.js'
import videoRoutes from './routes/video.routes.js'
import subscriptionRoutes from './routes/subscription.routes.js'
import commentRoutes from './routes/comment.routes.js'
import likeRoutes from './routes/like.routes.js'
const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"server running"
    })
    
})
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/videos',videoRoutes)
app.use('/api/v1/tweet',tweetRoutes)
app.use('/api/v1/subscripton',subscriptionRoutes)
app.use('/api/v1/comment',commentRoutes)
app.use('/api/v1/like',likeRoutes)
export default app;
