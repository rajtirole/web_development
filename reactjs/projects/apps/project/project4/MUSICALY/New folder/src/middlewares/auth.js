import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/appError.js";
import User from "../model/user.model.js";

const auth=asyncHandler(async(req,res,next)=>{
    try {
        const token=req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer ","")
    if(!token){
        throw new ApiError(400,"not valid token")
    }
    const user=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    if(!user){
        throw new ApiError(400,"not valid token")
    }
    const data=await User.findById(user?._id).select("-password -refreshToken")
    if(!data){
        throw new ApiError(400,"user not found")

    }
    req.user=data;
    next()
    } catch (error) {
        throw new ApiError(400,"Invalid access token",error)
        
    }

}) 
export default auth