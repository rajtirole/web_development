import { Video } from "../model/video.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/appError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import cloudinaryImageUploader from "../utils/cloudinary.js";

const getallVideo=asyncHandler(async(req,res)=>{
   try {
     const {page=1,limit=10,query,sortBy='title',sortType='asc',userId}=req.query
     const dataa=query?.split(',')
     const dataaa=dataa?.[0]
     const dataaaa=dataa?.[1]
     const owner=userId&&{owner:userId}
     const filter=dataaaa&&{[dataaa]:{$regex:dataaaa,$options:'i'}}
     const offset = (page - 1) * limit;
     const data=await Video.find({...filter,...owner}).limit(limit).sort({[sortBy]:sortType}).skip(offset)
     if(!data.length){
         throw new ApiError(400,"video get not success") 
     } 
     return res.status(200).json(
         new ApiResponse(200,data,"video get success")
     ) 
   } catch (error) {
    throw new ApiError(error.statusCode||500,error.message, error.error);

    
   }
})
const publishVideo=asyncHandler(async(req,res)=>{
   try {
     const {title,description}=req.body
     const id=req.user._id;
     if(!title||!description) {
         throw new ApiError(400,"All feilds are required")
     }
     const localPath=req?.file?.path
     if(!localPath){
         throw new ApiError(400,"All feilds are required")
 
     }
     const video=await cloudinaryImageUploader(localPath)
     if(!video){
         throw new ApiError(500,"upload error")
 
     } 
     const data=await Video.create({videoFile:video.secure_url,title,description,owner:id})
     await data.save()
     return res.status(200).json(
         new ApiResponse(200,data,"video upload success")
     )
   } catch (error) {
    throw new ApiError(error.statusCode||500,error.message, error.error);   
   }
})
const getVideoById=asyncHandler(async(req,res)=>{
   try {
     const {videoId}=req.params
     if(!videoId){
         throw new ApiError(400,"All feilds are required")
 
     }
     const video = await Video.findById(videoId)
     if(!video){
         throw new ApiError(400,"video get not success")
     }
     return res.status(200).json(
         new ApiResponse(200,video,"video get success")
     )
   } catch (error) {
    throw new ApiError(error.statusCode||500,error.message, error.error);
    
   }
})
const updateVideo=asyncHandler(async(req,res)=>{
   try {
    const {videoId}=req.params
    const id=req.user._id
    const {title,description}=req.body
    if(!title||!description) {
        throw new ApiError(400,"All feilds are required")
    }
    if(!videoId){
        throw new ApiError(400,"All feilds are required")

    }
    const video = await Video.findOneAndUpdate({_id:videoId,owner:id},{$set:{

        title,description
    }},{new:true})
    // const video=await Video.find({_id:videoId,owner:id})
    if(!video){
        throw new ApiError(400,"video get not success")
    }
    return res.status(200).json(new ApiResponse(200,video,"update success"))

   } catch (error) {
    throw new ApiError(error.statusCode||500,error.message, error.error);
   }
})
const deleteVideo=asyncHandler(async(req,res)=>{
   try {
     const {videoId}=req.params;
     const id=req.user._id;
     if(!videoId){
         throw new ApiError(400,"All feilds are required")
 
     }
     const video = await Video.findOneAndDelete({_id:videoId,owner:id})
     if(!video){
        throw new ApiError(400,"video get not success")
     }
     console.log(video);
     return res.status(200).json(new ApiResponse(200,video,"delete success"))


   } catch (error) {
    throw new ApiError(error.statusCode||500,error.message, error.error);

   }

})
export {getallVideo,publishVideo,getVideoById,updateVideo,deleteVideo} 