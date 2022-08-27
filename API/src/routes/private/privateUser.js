// Create Router
import { Router } from "express";
const router = Router();

// import controllers
import { getUserById, updateUser} from '../../controllers/userControllers.js'

// import middleware
import { protect } from '../../middleware/protect.js'

//GET
router.get('/', protect, getUserById)

//PUT
router.put('/update', protect, updateUser)


export default router;