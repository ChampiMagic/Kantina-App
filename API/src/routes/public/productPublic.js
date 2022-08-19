import { Router } from "express";
const router = Router();
import { getProduct, getProductByName } from '../../controllers/productControllers.js' 

router.get('/', getProduct)
router.get('/byName', getProductByName)

export default router;