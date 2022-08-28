// Create Router
import { Router } from "express";
const router = Router();

// import controllers
import { getAWSFile, uploadImage } from '../../controllers/S3Controller.js'

// AWS S3 middleware
import multer from "multer";
const upload = multer({ dest: 'upload/' })

// import middleware
import { protect } from '../../middleware/protect.js'

//GET
router.get('/:key', getAWSFile)

//PUT
router.put('/', protect, upload.single('image'), uploadImage)


export default router;