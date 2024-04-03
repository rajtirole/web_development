import { Router } from "express";
import upload from '../middlewares/multer.middleware.js'
import {getproductbyid,product,productSearch,updateProduct,getProduct} from '../controllers/product.controller.js'
import auth from '../middlewares/auth.js'
const router=Router()

router.get('/getproductbyid/:productId',getproductbyid)
router.get('/productSearch',productSearch)
router.get('/getProduct',getProduct)
router.post('/product',auth,upload.single("product"),product)
router.post('/updateProduct',auth,upload.single("product"),updateProduct)


export default router 