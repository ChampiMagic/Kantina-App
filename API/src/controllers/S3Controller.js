//import constructor
import { errorCreator ,ResponseCreator } from "../../utils/responseCreator.js";

//AWS S3 Functions
import { upload, getFileStream } from "../../s3.js";

//  -----PRIVATE CONTROLLERS-----  //

//GET
export const getAWSFile = (req, res, next) => {
   
    const key = req.params.key

    if(!key) res.send(errorCreator("Key is missing or invalid", 400))

    else {

        try{

            const readStream = getFileStream(key)

            readStream.pipe(res)

        } catch(err) {

            console.log("ERROR: S3CONTROLLER(getAWSFile)")
            next(err)
        }
       
    }
}

  

//POST
export const uploadImage = async (req, res, next) => {

    try {

        const result = await upload(req.file)

        res.send(new ResponseCreator('Image upload to AWS S3', 200, {imageKey: result.Key}))
        
    } catch (err) {

        console.log("ERROR: S3CONTROLLER(uploadImage)")
        next(err)
    }
    
}