import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/appError.js";
import User from "../model/user.model.js";
import cloudinaryImageUploader from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const generateAccessAndRefreshToken = asyncHandler(async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    if (!accessToken || !refreshToken) {
      throw new ApiError(500, "Token generate not succes");
    }

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Token generate not succes", error);
  }
});
const register = asyncHandler(async (req, res, next) => {
  const { userName, email, fullName, password } = req.body;
  if (
    [userName, email, fullName, password].some((value) => {
      return value?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All feilds are required");
  }
  const isUser = await User.findOne({
    $or: [{ userName }, { email }],
  });
  if (isUser) {
    throw new ApiError(400, "user already registered");
  }
  const avatarLocalFile = req.files?.avatar[0]?.path;
  let coverImageLocalFile;
  if (req.files.coverImage) {
    coverImageLocalFile = req.files?.coverImage[0]?.path;
  }
  if (!avatarLocalFile) {
    throw new ApiError(400, "Avatar image not found");
  }
  const avatarImage = await cloudinaryImageUploader(avatarLocalFile);
  const coverImage = await cloudinaryImageUploader(coverImageLocalFile);
  if (!avatarImage) {
    throw new ApiError(400, "Avatar image upload error");
  }
  const user = await User.create({
    fullName: fullName,
    email: email,
    userName: userName.toLowerCase(),
    avatar: avatarImage.url,
    coverImage: coverImage?.url || "",
    password,
  });
  const createUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createUser) {
    throw new ApiError(500, "User not register");
  }
  res
    .status(201)
    .json(new ApiResponse(200, createUser, "user register success"));
});
const login = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new ApiError(400, "All feilds are required");
  }
  const user = await User.find({
    $or: [{ email }, { username }],
  });
  if (!user) throw new ApiError(400, "user not found");
  console.log(user);
  const isUser = await user.isPassword(password);
  if (!isUser) {
    throw new ApiError(400, "Invalid credentials");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );
  const data = await User.findById(user._id).select("-password -refreshToken");
  const options = { httpOnly: true, secure: true };
  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(201, { data, accessToken }, "user login success"));
});
const logout = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  await User.findByIdAndUpdate(id, {
    $set: { refreshToken: undefined },
  });
  const options = { httpOnly: true, secure: true };
  res
    .status(201)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "user logout success"));
});
const refreshToken=asyncHandler(async (req,res,next)=>{
  try {
    const token=req.cookie?.refreshToken||req?.body?.refreshToken;
    if(!token){
    throw new ApiError(400, "refresh token required");

    }
    const userToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)


    const id=userToken._id
    const user=await User.findById(id).select("-password")
    if(!user){
    throw new ApiError(400, "user not registered");

    }
    if(token!==user?.refreshToken){
    throw new ApiError(400, "refresh token not verify");

    }
    const {refreshToken,accessToken}=await generateAccessAndRefreshToken(id)
    if(!refreshToken||!accessToken){
    throw new ApiError(500, "refresh token generate not success");

    }
    const options = { httpOnly: true, secure: true };
    return res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json(
      new ApiResponse(200,user,"refresh token generate success")
    )
  } catch (error) {
    throw new ApiError(500, "refresh token generate not success");
    
  }

})
const changePassword=asyncHandler(async (req,res)=>{
  const {password,newPasssword}=req?.body;
  if(!password||!newPasssword){
    throw new ApiError(400, "All feilds are required");

  }

  const id=req.user._id;
  const user=await User.findById(id).select("-password -refreshToken");
  if(!user){
    throw new ApiError(400, "user not found");

  }
  const isPassword=user.isPassword(password)
  if(!isPassword){
    throw new ApiError(400, "Invalid credentials");

  }
  user.password=newPasssword;
  await save({validateBeforeSave:false})
  return res.status(200).json(
    new ApiResponse(200,{},"password change success")
  )


})
const getUser=asyncHandler(async(req,res)=>{
 try {
   const user=req.user;
   if(!user){
     throw new ApiError(400, "user not found");
 
   }
   return res.status(200).json(
     new ApiResponse(200,user,"user get success")
   )
 } catch (error) {
  throw new ApiError(500, "user not found");

 }
})
const updateUser=asyncHandler(async(req,res)=>{
  try {
    const {userName,email,fullName}=req.body;
    const user=await User.findByIdAndUpdate(req.user._id,{
      $set:{
        fullName,userName,email
      }
    },{new:true}).select("-password -refreshToken");
    if(user){
    throw new ApiError(400, "user not found");

    }
    user.save()
    return res.status(200).json(new ApiResponse(200,user,"user data apdate success"))

  } catch (error) {
  throw new ApiError(500, "user not found");
    
  }
})
const updateUserAvatar=asyncHandler(async(req,res)=>{
  try {
    const avatarImageLocalFile = req.file?.path;
    if(!avatarImageLocalFile){
    throw new ApiError(500, "avatar image not found");


    }
    const avatar=await cloudinaryImageUploader(avatarImageLocalFile)
    if(!avatar?.url){
    throw new ApiError(500, "avatar image change not success");

    }
    const user=await User.findByIdAndUpdate(req.user._id,{
      $set:{
       avatar:avatar.url
      }
    },{new:true}).select("-password -refreshToken");
    if(user){
    throw new ApiError(400, "user not found");

    }
    user.save()
    return res.status(200).json(new ApiResponse(200,user,"user data apdate success"))

  } catch (error) {
  throw new ApiError(500, "user not found");
    
  }
})
const updateUsercover=asyncHandler(async(req,res)=>{
  try {
    const updateUsercoverLocalFile = req.file?.path;
    if(!updateUsercoverLocalFile){
    throw new ApiError(500, "avatar image not found");


    }
    const coverImage=await cloudinaryImageUploader(updateUsercoverLocalFile)
    if(!coverImage?.url){
    throw new ApiError(500, "avatar image change not success");

    }
    const user=await User.findByIdAndUpdate(req.user._id,{
      $set:{
        coverImage:coverImage.url
      }
    },{new:true}).select("-password -refreshToken");
    if(user){
    throw new ApiError(400, "user not found");

    }
    return res.status(200).json(new ApiResponse(200,user,"user data apdate success"))

  } catch (error) {
  throw new ApiError(500, "user not found");
    
  }
})
const getUserChannel=asyncHandler(async(req,res)=>{
  const {userName}=req.params;
  if(!userName){
  throw new ApiError(400, "channel get not success");

  }
  const channel=await User.aggregate([{
    $match:{
      userName:userName.toLowerCase()
    }
  },
  {$lookup:{
    from:'subscriptions',
    localField:'_id',
    foreignField:'channel',
    as:"subscribers"
  }

},
  {
    $lookup:{
      from:'subscriptions',
      localField:'_id',
      foreignField:'subscriber',
      as:"subscribedChannel"
    }
  },
  {
   $addFields:{
    subscribers:{
      $size:"$subscribers"
    },
    subscribedChannels:{
      $size:"$subscribedChannel"
    },
    isSubscribed:{
     $cond:{
      if:{
        $in:[req.user?._id,"$subscribers"],
        then:true,
        else:false
      }
     } 
    }
   } 
  },{
    $project:{
      fullName:1,
      userName:1,
      subscribers:1,
      subscribedChannels:1,
      isSubscribed:1,
      avatar,
      coverImage,
      email

    }
  }
])
console.log(channel);
if(!channel){
  throw new ApiError(400, "channel not found");
}
return res.status(200).json(
  new ApiResponse(200,channel[0],"channel get success")
)
})
const watchHistory=asyncHandler(async(req,res)=>{
  const id=req.user._id
  if(!id){
  throw new ApiError(400, "user not found");

  }
  const watchHistory=await User.aggregate([
    {
      $match:{
        _id:{$toObjectId:id}
      }
    },{
      $lookup:{
        from:'videos',
        localField:"watchHistory",
        foreignField:"_id",
        as:'watchHistory',
        pipeline:[{
          $lookup:{
            from:'users',
            localField:'owner',
            foreignField:'_id',
            as:'owner',
            pipeline:[
              {
                
                  $project:{
                    fullName:1,
                    userName:1,
                    avatar:1,
                    coverImage:1
                  }
                
              },{
                $addFields:{
                  owner:{
                    $first:"$owner"
                  }
                }
              }
            ]
          }
        }]
      },
      
    }
  ])
  if(!watchHistory){
  throw new ApiError(500, "watchHistory not found");
    
  }
  res.status(200).json(
    new ApiResponse(200,watchHistory[0].watchHistory,"watch history get success")
  )
})

export { register, login, logout ,refreshToken,getUser,updateUser,updateUserAvatar,updateUsercover,getUserChannel,watchHistory,changePassword};
