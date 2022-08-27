//create Router
import { Router } from "express";
const router = Router();

//import all Routes
import privateProduct from './private/privateProduct.js'
import privateUser from './private/privateUser.js'
import privateAWS from './private/privateAWS.js'
import publicAuth from './public/publicAuth.js'


//private
router.use('/privateProduct', privateProduct)
router.use('/privateUser', privateUser)
router.use('/privateAWS', privateAWS)


//public
router.use('/publicAuth', publicAuth)


export default router;