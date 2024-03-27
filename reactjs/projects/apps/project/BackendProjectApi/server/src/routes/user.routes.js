import { Router } from "express";
import {login, logout, register} from '../controllers/user.controller.js'
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
export default router