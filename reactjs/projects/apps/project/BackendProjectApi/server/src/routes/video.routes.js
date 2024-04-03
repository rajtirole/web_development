import { Router } from "express";
import upload from '../middlewares/multer.middleware.js'
import auth from '../middlewares/auth.js'
import {getallVideo,publishVideo,getVideoById,updateVideo,deleteVideo} from '../controllers/video.controller.js'
const router=Router()
router.get('/videos',getallVideo)
router.get('/getVideoById/:videoId',getVideoById)
router.post('/publishVideo',auth,upload.single("video"),publishVideo)
router.post('/updateVideo/:videoId',auth,updateVideo)
router.post('/deleteVideo/:videoId',auth,deleteVideo)

export default router  