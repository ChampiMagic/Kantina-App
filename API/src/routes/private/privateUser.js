import { Router } from "express";
const router = Router();
import { getUserById } from '../../controllers/userControllers.js'

router.get('/', getUserById)

export default router;