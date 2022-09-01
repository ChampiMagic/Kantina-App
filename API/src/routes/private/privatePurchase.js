//Create Router
import { Router } from "express";
const router = Router();

//import controllers
import { addPurchase, deletePurchase} from '../../controllers/purchaseControllers.js' 

//import middleware
import { protect } from '../../middleware/protect.js'

//POST
router.post('/', protect, addPurchase)

//DELETE
router.delete('/', protect, deletePurchase)

export default router