import { Router } from "express";
import auth from '../middlewares/auth.js'
import {getVideolike,like,deletelike,getvideolike} from '../controllers/like.controller.js'
const router=Router()
router.get('/getVideolike',getVideolike)
router.post('/getvideolike/:videoId',auth,getvideolike)
router.get('/like/:videoId',auth,like)
router.post('/deletelike/:likeId',auth,deletelike)


export default router  