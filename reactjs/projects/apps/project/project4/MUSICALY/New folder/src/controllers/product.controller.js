import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/appError.js";
import User from "../model/user.model.js";
import cloudinaryImageUploader from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import fs from "fs";
import list from "../model/product.model.js";

const getproductbyid = asyncHandler(async (req, res) => {
    console.log("product");
    const { productId} = req.params;
    if (!productId) {
      return res.status(200).json( new ApiError(400, "All feilds are required"))
    }

    const product = await list.findById(productId);
    if (!product) {
      throw new ApiError(400, "product not found");
    }
    return res.status(200).json(new ApiResponse(200, product, "product get success"));
  });

const product = async (req, res) => {
   try {
     console.log("product");
     const { price_inr,name,color,type,brand,rating,about_item,wireless,connectivity,battery_life} = req.body;
     const id=req.user._id
     console.log((!price_inr||!name||!color||!type||!brand||!rating||!about_item||!wireless||!connectivity||!battery_life));
     if (!price_inr||!name||!color||!type||!brand||!rating||!about_item||!connectivity||!battery_life){
       return res.status(400).json(
       { success:false,
        message:"All feilds are required",}
       )
     }
     const localPath = req.file?.path;
     if (!localPath) {
       throw new ApiError(500, "avatar image not found");
     }
     const avatar = await cloudinaryImageUploader(localPath);
     if (!avatar?.url) {
       throw new ApiError(500, "avatar image change not success");
     }
     console.log(avatar);
     const product = await list.create({owner:id,price_inr:price_inr,name:name,color:color,type:type,brand:brand,rating:rating,about_item:about_item,wireless:wireless,connectivity:connectivity,battery_life:battery_life,image_url:avatar.url});
     console.log(product); 
     if (!product) {
       throw new ApiError(400, "product not found");
     }
     return res.status(200).json(new ApiResponse(200, product, "product get success"));
   
   } catch (error) {
    console.log(error);
    
   }};
   const productSearch=async(req,res)=>{
    console.log('product');
    try {
        const price_inr=req.query.price_inr||'';
        const name=req.query.name||'';
        const color=req.query.color||'';
        const type=req.query.type||'';
        const brand=req.query.brand||'';
        const rating=req.query.rating||'';
        const about_item=req.query.about_item||'';
        const wireless=req.query.wireless||'';
        const connectivity=req.query.connectivity||'';
        const battery_life=req.query.battery_life||'';
   console.log( price_inr,name,color,type,brand,rating,about_item,wireless,connectivity,battery_life);
        
       
        const product=await list.find({name:{$regex:name,$options:'i'},color:{$regex:color,$options:'i'},type:{$regex:type,$options:'i'},brand:{$regex:brand,$options:'i'},about_item:{$regex:about_item,$options:'i'},wireless:{$regex:wireless,$options:'i'},connectivity:{$regex:connectivity,$options:'i'},battery_life:{$regex:battery_life,$options:'i'}});
        if(!product){
            return res.status(400).json({
                succes:false,
                message:'product get failed',
                data:'product not found'
            }) 
        }
        return res.status(200).json({
            succes:true,
            message:'product get success',
            data:product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes:false,
            message:'job get failed',
            data:error.message
        })
    }


   }
   async function updateProduct(req,res){ 
    console.log('update product');
    try {
        const productId=req.params.productId;
     const { price_inr,name,color,type,brand,rating,about_item,wireless,connectivity,battery_life} = req.body;
        const refUserId=req.user._id;
        if (!price_inr||!name||!color||!type||!brand||!rating||!about_item||!connectivity||!battery_life||!image_url){
            return res.status(400).json(
            { success:false,
             message:"All feilds are required",}
            )
          }
      
        const data=await list.updateOne({_id:productId,owner:refUserId},
            {
                $set:{
                    price_inr,name,color,type,brand,rating,about_item,wireless,connectivity,battery_life
                }
            })
            const product=await list.findOne({_id:productId})
    if(!data){
        return res.status(400).json(
            { success:false,
             message:"product update not success",}
            )
          
    }
        return res.status(200).json({
            succes:true,
            message:'product update success',
            data:product
        })
        
    } catch (error) {
        console.log(error);
    
        return res.status(500).json({
            succes:false,
            message:'product update failed',
            data:error.message
        })
    }
    }


 const  getProduct=async (req,res,next)=>{  
    try {
        const product=await list.find({})
        if(!product){
            return res.status(400).json(
                { success:false,
                 message:"product get not success",}
                )
        }
        return res.status(200).json({
            succes:true,
            message:'product get success',
            data:product
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json(
            { success:false,
             message:"product get not success",}
            )
        
    }
  }
export {
  getproductbyid,
  getProduct,
  product,
  productSearch,
  updateProduct
};
