//import model
import User from "../models/User.js";

//import constructor
import { errorCreator, ResponseCreator } from "../../utils/responseCreator.js";



//  -----PRIVATE CONTROLLERS-----  //

// GET
export const getUserById = (req, res , next) => {

    if(!req.userData.isStudent) {


        const { userEmail } = req.query;

        if(!userEmail) {
    
            const error = new errorCreator('email is necessary', 400)
            next(error)
    
        } else {
            User.find({email: userEmail})
            .then(user => {
    
               res.send(new ResponseCreator('User found', 200, {user}))
    
            }).catch(err => {
    
                console.log("ERROR: USERCONTROLLER(getUserById)")
                next(err)
            })
        }

    } else {
        res.send(errorCreator("Unauthorized user", 401))
    }

}


// PUT 
export const updateUser = (req, res, next) => {

    const updateUser = req.body.updateUser

    User.findByIdAndUpdate(req.userData._id, updateUser)
    .then(updatedUser => {

        res.send(new ResponseCreator('User Updated', 200, {user: updatedUser}))

    }).catch(err => {

        console.log("ERROR: USERCONTROLLER(updateUser)")
        next(err)
    })
}


//  -----PUBLIC CONTROLLERS-----  //



