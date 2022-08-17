import { Router } from "express";
const router = Router();
import { getProduct } from '../../controllers/productControllers.js' 

router.get('/', getProduct)

export default router;