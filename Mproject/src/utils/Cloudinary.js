import {v2 as cloudinary} from "cloudinary";
import fs from 'fs'
cloudinary.config({ 
        cloud_name: process.env.cloudinary_cloud_name, 
        api_key: process.env.cloudinary_api_key, 
        api_secret: process.env.cloudinary_api_secret // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload through file path
     const uploadOnCloudinary = async(localfilepath)=>{
      try{
        if(!localfilepath) return null;
        const response = await cloudinary.uploader.upload(localfilepath,{   
               resource_type: 'auto',
           }
       )

       return response;
      }
      catch(error){
        fs.unlinkSync(localfilepath)
        return null
      }
     } 
    export {uploadOnCloudinary}