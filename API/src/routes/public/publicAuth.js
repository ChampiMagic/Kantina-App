import { Router } from "express";
const router = Router();
import { register, login } from '../../controllers/authControllers.js' 

router.post('/', register)
router.post('/login', login)

export default router;