import fs from "fs"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: procees.env.CLOUDINARY_API_KEY,
    api_secret: procees.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }
        // Upload the file on cloudinary 
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // File has been uploaded succesfully
        console.log("File has been upload Cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // Remove the file Locally Saved temporaory file 
        // as the upload operation got failed 
        return null
    }
}

export { uploadOnCloudinary };