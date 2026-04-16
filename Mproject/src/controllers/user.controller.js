import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { user } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  console.log(email);
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are required");
  }
  const existedUser = user.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or usrname already exits");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if(!avatar){
        throw new ApiError(400, "avatar file is required");
  }

  const User = await user.create({fullName, avatar: avatar.url, coverImage: coverImage?.url || "", email, password, username: username.toLowerCase()})

  const createdUser = await User.findById(user._id).select("-password -refreshToken") 
  if(!createdUser){
    throw new ApiError(500, "something went wrong while registering the user")
  }
  return res.status(201).json(
    new ApiResponse(200, createdUser, "user registered successfully")
  )
});

export { registerUser };
