import Like from "../model/like.model.js";
import { Video } from "../model/video.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/appError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getVideolike=asyncHandler(async(req,res)=>{
   try {
     const {page=1,limit=10,userId}=req.query
     const offset = (page - 1) * limit;
     const owner=userId&&{liked:userId}
     const data=await Like.find({...owner}).limit(limit).sort({[sortBy]:sortType}).skip(offset)
     if(!data.length){
         throw new ApiError(400,"like get not success") 
     }
     return res.status(200).json(
         new ApiResponse(200,data,"like get success")
     ) 
   } catch (error) {
    return res.status(500).json(
        {
            success:false,
            error
        }
    )
    
   }
})
const getvideolike=asyncHandler(async(req,res)=>{
    const {videoId}=req.params;
    if(!videoId) {
        throw new ApiError(400,"All feilds are required")
    }
    const data=Like.find({video:videoId})
    if(!data){
        throw new ApiError(400,"like get not success")
     }
    console.log(data);
    return res.status(200).json(new ApiResponse(200,like,"like success"))
   
})
const like=asyncHandler(async(req,res)=>{
    const id=req.user._id;
    const {videoId}=req.params;
    if(!videoId) {
        throw new ApiError(400,"All feilds are required")
    }
    
    const data=await Like.create({video:videoId,liked:id})
    await data.save()
    return res.status(200).json(
        new ApiResponse(200,data,"video upload success")
    )
})


const deletelike=asyncHandler(async(req,res)=>{
   try {
     const {videoId}=req.params;
     const id=req.user._id;
     if(!videoId){
         throw new ApiError(400,"All feilds are required")
 
     }
     const like = await Like.findOneAndDelete({liked:id,video:videoId})
     if(!like){
        throw new ApiError(400,"like get not success")
     }
     console.log(like);
     return res.status(200).json(new ApiResponse(200,like,"like success"))


   } catch (error) {
    return res.status(500).json(
        {
            success:false,
            message:"like not success",
            error:error
        }
    )
   }

})
export {getVideolike,like,deletelike,getvideolike} 