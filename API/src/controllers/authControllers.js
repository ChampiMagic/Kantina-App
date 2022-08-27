//import model
import User from "../models/User.js";

//import constructors
import { errorCreator, ResponseCreator } from '../../utils/responseCreator.js'

//other dependencies
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import 'dotenv/config';



//  -----PUBLIC CONTROLLERS-----  //

export const register = async (req, res, next) => {

    const { email, name, password, genre, isStudent } = req.body

    //password encryption
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    User.create({
        name,
        email,
        passwordHash,
        genre,
        isStudent
    })
    .then(newUser => {
       
        //token data
        const userForToken = {
            _id: newUser._id,
            isStudent: newUser.isStudent
        }
    
        //creating token
        const token = jwt.sign(userForToken, process.env.SECRET_WORD)
    
        res.send(new ResponseCreator('Register Successfully', 201, {token, user: newUser}))


    }).catch(err => {

        console.error("ERROR: AUTHCONTROLLER(REGISTER)")
        next(err)
    })
}


export const login = async (req, res, next) => {

    const { email, password } = req.body;
    
    const user = await User.findOne({ email })

    //user verification
    const passwordCorrect = user === null 
        ? false
        : await bcrypt.compare(password, user.passwordHash)

    //bad request    
    if(!(user && passwordCorrect)) {
        next(new errorCreator('invalid user or password', 401))
    }

    //token data
    const userForToken = {
        _id: user._id,
        isStudent: newUser.isStudent
    }

    //creating token
    const token = jwt.sign(userForToken, process.env.SECRET_WORD)

    res.send(new ResponseCreator('Login Successfully', 200, {token, user}))
}