import { Router } from "express";
const router = Router();
import privateProduct from './private/productPrivate.js'
import publicProduct from './public/productPublic.js'


router.use('/privateProduct', privateProduct)
router.use('/publicProduct', publicProduct)

export default router;