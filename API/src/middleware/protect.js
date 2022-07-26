//import other dependencies
import jwt from 'jsonwebtoken'
import 'dotenv/config';

//import constructor
import { errorCreator } from '../../utils/responseCreator.js';


export const protect = (req, res, next) => {

    const { authorization } = req.headers
   
    let token = ''

    if(authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    }

    const decodeToken = jwt.verify(token, process.env.SECRET_WORD)

    if(!token || !decodeToken._id) {
        next(new errorCreator('token is missing or invalid', 401))
    }

    req.userData = {
        _id: decodeToken._id,
        isStudent: decodeToken.isStudent
    }

    next()
}
