import User from "../models/User.js";
import { errorCreator } from "../../utils/responseCreator.js";

export const getUserById = (req, res , next) => {

    const { id } = req.body;

    if(!id) {
        const error = new errorCreator('id is necessary', 400)
        next(error)
    } else {
        User.findById(id)
        .then(user => {
            res.send(user)
        }).catch(err => {
            next(err)
        })
    }

    

}