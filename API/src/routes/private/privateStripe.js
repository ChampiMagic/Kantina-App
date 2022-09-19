//Create Router
import { Router } from "express";
const router = Router();

//import controllers
import { stripePayment } from "../../controllers/stripeControllers.js";

//import middleware
import { protect } from '../../middleware/protect.js'

//POST
router.post('/', protect, stripePayment)

export default router