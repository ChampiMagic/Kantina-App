import { Router } from "express";
const router = Router();
import { getUserById } from '../../controllers/userControllers.js'
import { protect } from '../../middleware/protect.js'

router.get('/', protect, getUserById)

export default router;