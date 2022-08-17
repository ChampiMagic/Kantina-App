import { Router } from "express";
const router = Router();
import { getProduct, createProduct, updateProduct, deleteProduct } from '../../controllers/productControllers.js' 


router.post('/', createProduct)

router.put('/', updateProduct)

router.delete('/', deleteProduct)

export default router