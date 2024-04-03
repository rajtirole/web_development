import Like from "../model/like.model.js";
import Tweet from "../model/tweet.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/appError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const gettweet=asyncHandler(async(req,res)=>{
   try {
     const {page=1,limit=10,userId}=req.query;
     const offset = (page - 1) * limit;
     const owner=userId&&{owner:userId}
     const data=await Tweet.find({...owner}).limit(limit).sort({[sortBy]:sortType}).skip(offset)
     if(!data.length){
         throw new ApiError(400,"tweet get not success")
     }
     return res.status(200).json(
         new ApiResponse(200,data,"tweet get success")
     ) 
   } catch (error) {
    throw new ApiError(error.statusCode||500,error.message||'user register not success', error.error);

    
   }
})
const tweet=async(req,res)=>{
    try {
        const id=req.user._id;
        const {content}=req.body;
        if(!content) {
            throw new ApiError(400,"All feilds are required")
        }
        
        const data=await Tweet.create({content,owner:id})
        if(!data){
            res.status(400).json({
                success:false,
                message:"tweet upload not succcess"
            })
        }
        await data.save()
        return res.status(200).json(
            new ApiResponse(200,data,"tweet success")
        )
    }
     catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error
        })
    }
}


const deletetweet=async(req,res)=>{
   try {
     const {tweetId}=req.params;
     const id=req.user._id;
     if(!tweetId){
         throw new ApiError(400,"All feilds are required")
 
     }
     const data = await Tweet.findOneAndDelete({owner:id,tweetId:_id})
     if(!data){
        throw new ApiError(400,"tweet get not success")
     }
     console.log(data);
     return res.status(200).json(new ApiResponse(200,data,"tweet get success"))


   } catch (error) {
    return res.status(500).json(
        {
            success:false,
            message:"tweet not success",
            error:error
        }
    )
   }

}
export {gettweet,tweet,deletetweet} 