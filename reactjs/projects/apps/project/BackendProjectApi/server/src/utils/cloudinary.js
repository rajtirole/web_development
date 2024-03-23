import { v2 as cloudinary } from "cloudinary";
import fs, { fsyncSync } from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
async function cloudinaryImageUploader(localFile) {
  try {
    if (!localFile) return null;
    const response = await cloudinary.uploader.upload(localFile, {
      resource_type: "auto",
    });
    console.log("cloudinary file upload success", response);
    return response;
  } catch (error) {
    console.log("cloudinary file upload not success", error);
    fs.unlinkSync(localFile);
    return null;
  }
}
export default cloudinaryImageUploader;
