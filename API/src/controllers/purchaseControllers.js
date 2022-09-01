//import model
import Purchase from '../models/Purchase.js'
import User from '../models/User.js'

//import constructor
import { errorCreator, ResponseCreator } from '../../utils/responseCreator.js'


//  -----PRIVATE CONTROLLERS-----  //

// POST
export const addPurchase = async (req, res, next) => {

    
    const {date, products} = req.body
    
    try {
      
        const purchase = await Purchase.create({
            date,
            products
        })
       
        const user = await User.findByIdAndUpdate(req.userData._id, {$push: {purchases: purchase._id}}, {new: true,  upsert: true})
     
        res.send(new ResponseCreator("Successful Purchase", 201, null))

    } catch(err) {

        console.log("ERROR: PURCHASECONTROLLER(addPurchase)")
        next(err)
    }

}

// DELETE
export const deletePurchase = async(req, res, next) => {

    const { purchaseId } = req.body

    try {

        await Purchase.findByIdAndDelete(purchaseId)
        
    
        await User.findByIdAndUpdate(req.userData._id, { $pullAll: {purchases: [purchaseId]}})

        res.send(new ResponseCreator("Purchase deleted", 200, null))

    } catch(err) {

        console.log("ERROR: PURCHASECONTROLLER(deletePurchase)")
        next(err)
    }
}
