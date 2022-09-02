//import model
import User from "../models/User.js";

//import constructor
import { errorCreator, ResponseCreator } from "../../utils/responseCreator.js";



//  -----PRIVATE CONTROLLERS-----  //

// GET
export const getUserById = (req, res , next) => {

    if(!req.userData.isStudent) {
       

        const { userId } = req.query;

      

        if(!userId) {
    
            const error = new errorCreator('userId is necessary', 400)
            next(error)
    
        } else {
            User.findById(userId).populate({
                path: "purchases",
                model: "Purchase",
                populate: { path: "products.product", model: "Product", strictPopulate: false},
                
            })
            .then(user => {
    
               res.send(new ResponseCreator('User found', 200, {user}))
    
            }).catch(err => {
    
                console.log("ERROR: USERCONTROLLER(getUserById)")
                next(err)
            })
        }

    } else {
        res.send(new errorCreator("Unauthorized user", 401))
    }

}


// PUT 
export const updateUser = (req, res, next) => {

    const updateUser = req.body.updateUser

    User.findByIdAndUpdate(req.userData._id, updateUser, {new: true})
    .then(updatedUser => {

        res.send(new ResponseCreator('User Updated', 200, {user: updatedUser}))

    }).catch(err => {

        console.log("ERROR: USERCONTROLLER(updateUser)")
        next(err)
    })
}


//  -----PUBLIC CONTROLLERS-----  //



