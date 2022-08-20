import User from "../models/User.js";
import bcrypt from 'bcrypt';
import { errorCreator, ResponseCreator } from '../../utils/responseCreator.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config';



export const register = async (req, res, next) => {

    const { email, name, password, isStudent } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    User.create({
        name,
        email,
        passwordHash,
        isStudent
    })
    .then(newUser => {
       
        const userForToken = {
            _id: newUser._id
        }
    
        const token = jwt.sign(userForToken, process.env.SECRET_WORD)
    
        res.send(new ResponseCreator('Register Successfully', 201, token))


    }).catch(err => {
        console.error(err)
        next(err)
    })
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email })

    const passwordCorrect = user === null 
        ? false
        : await bcrypt.compare(password, user.passwordHash)

        
    if(!(user && passwordCorrect)) {
        next(new errorCreator('invalid user or password', 401))
    }

    const userForToken = {
        _id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET_WORD)

    res.send(new ResponseCreator('Login Successfully', 200, token))
}