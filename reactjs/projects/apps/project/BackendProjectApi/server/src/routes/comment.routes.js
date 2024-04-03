import { Router } from "express";
import upload from '../middlewares/multer.middleware.js'
import auth from '../middlewares/auth.js'
import {getVideoComment,comment,updateComment,deleteComment} from '../controllers/comment.controller.js'
const router=Router()
router.get('/getVideoComment/:videoId',auth,getVideoComment)
router.get('/comment/:videoId',auth,comment)
router.post('/updateComment/:commentId',auth,updateComment)
router.post('/deleteComment/:commentId',auth,deleteComment)


export default router  