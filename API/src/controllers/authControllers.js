import User from "../models/User.js";
import bcrypt from 'bcrypt';

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