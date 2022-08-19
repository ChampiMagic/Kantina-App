import { Router } from "express";
const router = Router();
import { getProduct, getProductByName, getProductById } from '../../controllers/productControllers.js' 

router.get('/', getProduct)
router.get('/byName', getProductByName)
router.get('/byId', getProductById)

export default router;