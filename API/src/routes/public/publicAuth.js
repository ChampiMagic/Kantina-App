import { Router } from "express";
const router = Router();
import { register } from '../../controllers/authControllers.js' 

router.post('/', register)

export default router;