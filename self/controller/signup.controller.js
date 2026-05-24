import { uploadOnCloudinary } from "../cloudinary.js";
import { userModel } from "../model/selfuser.model.js";
console.log("entered signup");
const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      throw new Error("All fields are required!");
    }
    const photoLocalPath = req.files?.photo?.path;
    const photo = await uploadOnCloudinary(photoLocalPath);
    if (!photo) {
      throw new Error(500, "file is required");
    }
    const cuser = userModel.create({
      email,
      username,
      password,
      photo: photo.url,
    });
    return res.status(201).json({
      message: "User successfully registered!",
      user: cuser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { signup };
