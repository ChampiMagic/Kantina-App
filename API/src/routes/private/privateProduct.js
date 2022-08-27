//Create Router
import { Router } from "express";
const router = Router();

//import controllers
import { createProduct, updateProduct, deleteProduct, getProduct, getProductByName, getProductById, getGroups } from '../../controllers/productControllers.js' 

//import middleware
import { protect } from '../../middleware/protect.js'

//GET
router.get('/', protect, getProduct)
router.get('/byName', protect, getProductByName)
router.get('/byId', protect, getProductById)
router.get('/groups', protect, getGroups)

//POST
router.post('/', protect, createProduct)

//PUT
router.put('/', protect, updateProduct)

//DELETE
router.delete('/', protect, deleteProduct)

export default router