import User from "../models/User.js";
import bcrypt from 'bcrypt';
import { errorCreator } from '../../utils/responseCreator.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config';



export const register = async (req, res, next) => {

    const { username, password, isStudent } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    User.create({
        username,
        passwordHash,
        isStudent
    })
    .then(newUser => {

        res.status(201).send(newUser)

    }).catch(err => {
        next(err)
    })
}

export const login = async (req, res, next) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username })

    const passwordCorrect = user === null 
        ? false
        : await bcrypt.compare(password, user.passwordHash)

        
    if(!(user && passwordCorrect)) {
        next(new errorCreator('invalid user or password', 401))
    }

    const userForToken = {
        _id: user._id,
        username: user.username
    }

    const token = jwt.sign(userForToken, process.env.SECRET_WORD)

    res.send({token})
}