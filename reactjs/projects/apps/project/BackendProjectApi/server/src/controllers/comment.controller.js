import { Video } from "../model/video.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/appError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getVideoComment=asyncHandler(async(req,res)=>{
   try {
     const {page=1,limit=10,sortBy='content',sortType='asc',userId}=req.query
     const {videoId}=req.params;
     const owner=userId&&{owner:userId}
     const offset = (page - 1) * limit;
     const data=await Comment.find({...owner,video:videoId}).limit(limit).sort({[sortBy]:sortType}).skip(offset)
     if(!data.length){
         throw new ApiError(400,"comment get not success") 
     }
     return res.status(200).json(
         new ApiResponse(200,data,"comment get success")
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
const comment=asyncHandler(async(req,res)=>{
    const {content}=req.body
    const id=req.user._id;
    const {videoId}=req.params;
    if(!content||!videoId) {
        throw new ApiError(400,"All feilds are required")
    }
    
    const data=await Comment.create({content,video:videoId,owner:id})
    await data.save()
    return res.status(200).json(
        new ApiResponse(200,data,"video upload success")
    )
})

const updateComment=asyncHandler(async(req,res)=>{
   try {
    const {commentId}=req.params
    const id=req.user._id
    const {content}=req.body
    if(!content||!commentId) {
        throw new ApiError(400,"All feilds are required")
    }
    
    const comment = await Comment.findOneAndUpdate({_id:commentId,owner:id},{$set:{

        content
    }},{new:true})
    // const video=await Video.find({_id:videoId,owner:id})
    if(!comment){
        throw new ApiError(400,"comment get not success")
    }
    return res.status(200).json(new ApiResponse(200,comment,"comment success"))

   } catch (error) {
    console.log(error);
    return res.status(500).json(
        {
            success:false,
            message:"comment not success"
        }
    )
   }
})
const deleteComment=asyncHandler(async(req,res)=>{
   try {
     const {commentId}=req.params;
     const id=req.user._id;
     if(!commentId){
         throw new ApiError(400,"All feilds are required")
 
     }
     const comment = await Comment.findOneAndDelete({_id:comment,owner:id})
     if(!comment){
        throw new ApiError(400,"comment get not success")
     }
     console.log(comment);
     return res.status(200).json(new ApiResponse(200,comment,"comment success"))


   } catch (error) {
    return res.status(500).json(
        {
            success:false,
            message:"comment not success",
            error:error
        }
    )
   }

})
export {getVideoComment,comment,updateComment,deleteComment} 