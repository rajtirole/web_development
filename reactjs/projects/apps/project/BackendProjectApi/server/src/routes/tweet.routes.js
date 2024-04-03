import { Router } from "express";
import auth from '../middlewares/auth.js'
import { gettweet ,tweet,deletetweet} from "../controllers/tweet.controller.js";
const router=Router()
router.get('/gettweet',gettweet)
router.post('/tweet',auth,tweet)
router.post('/deletetweet/:tweetId',auth,deletetweet)


export default router  