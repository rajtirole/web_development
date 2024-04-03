import { Router } from "express";
import {login, logout, register,changePassword,refreshToken,getUser,updateUser,updateUserAvatar,updateUsercover,getUserChannel,watchHistory} from '../controllers/user.controller.js'
import upload from '../middlewares/multer.middleware.js'
import auth from '../middlewares/auth.js'
const router=Router()
router.post('/register',
upload.fields([{
    name:"avatar",
    maxCount:1
},{
    name:"coverImage",
    maxCount:1
}]),register)
router.post('/login',login)
router.get('/logout',auth,logout)
router.post('/refreshtoken',refreshToken)
router.post('/getUser',auth,getUser)
router.post('/updateUser',auth,updateUser)
router.post('/changePassword',auth,changePassword)
router.post('/getUserChannel/:userName',auth,getUserChannel)
router.post('/watchHistory',auth,watchHistory)
router.post('/updateUserAvatar',auth,upload.single("avatarImage"),updateUserAvatar)
router.post('/updateUsercover',auth,upload.single("updateUsercover"),updateUsercover)


export default router 