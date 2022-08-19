import { Router } from "express";
const router = Router();
import { getProduct, getProductByName, getProductById, getGroups } from '../../controllers/productControllers.js' 

router.get('/', getProduct)
router.get('/byName', getProductByName)
router.get('/byId', getProductById)
router.get('/groups', getGroups)

export default router;