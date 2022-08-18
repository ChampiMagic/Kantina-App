import User from "../models/User.js";
import { errorCreator } from "../../utils/responseCreator.js";

export const getUserById = (req, res , next) => {

    const { userId } = req.body;

    if(!userId) {
        const error = new errorCreator('id is necessary', 400)
        next(error)
    } else {
        User.findById(userId)
        .then(user => {
            res.send(user)
        }).catch(err => {
            next(err)
        })
    }

    

}