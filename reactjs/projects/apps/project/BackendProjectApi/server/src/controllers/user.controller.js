import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/appError.js";
import User from "../model/user.model.js";
import cloudinaryImageUploader from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
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
export { register, login, logout };
