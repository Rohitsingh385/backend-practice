import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.js";


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary = async (localFilePath) => {
        try{
            if(!localFilePath) {
                throw new ApiError(400, "No file path provided");
            }
            //upload the file on cloudinary

            const response = await cloudinary.uploader.upload(
                localFilePath, {
                    resource_type: "auto"
                }
            )
            console.log("File uploaded to Cloudinary:", response.secure_url);
            
            //file has been uploaded succesfully
            console.log("file is uploaded on cloudniary",
                response.url
            );
            return response;
        }catch(error){
            console.log("failed to upload cus:", error)
            throw new ApiError(400, "Failed to upload avatar to Cloudinary");
            fs.unlinkSync(localFilePath) // remove the locally saved  temporary file as the as the upload operation got failed
            return null;
        }
    }

    export { uploadOnCloudinary }