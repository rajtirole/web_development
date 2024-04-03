import { Router } from "express";
import auth from '../middlewares/auth.js'
import {  subscription,getsubscription} from "../controllers/subscription.controller.js";
const router=Router()
router.post('/subscription/:channel',auth,subscription)
router.post('/getsubscription/:channel',auth,getsubscription)


export default router  