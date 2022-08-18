import { Router } from "express";
const router = Router();
import { createProduct, updateProduct, deleteProduct } from '../../controllers/productControllers.js' 
import { protect } from '../../middleware/protect.js'


router.post('/', protect, createProduct)

router.put('/', protect, updateProduct)

router.delete('/', protect, deleteProduct)

export default router