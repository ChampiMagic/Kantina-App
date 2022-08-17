import Product from "../models/Product.js";
import { errorCreator } from '../../utils/responseCreator.js'

export const getProduct =  (req, res, next) => {

    Product.find({})
    .then(allProducts => {
        res.json(allProducts)
    }).catch(err => {
        next(err)
    })

    
}

export const createProduct =  (req, res, next) => {

    const productData = req.body

    Product.create(productData)
     .then(newProduct => {
        res.status(201).json(newProduct)
     }).catch(err => {
        next(err)
     })
}

export const updateProduct =  (req, res, next) => {

    const { id, productData } = req.body;

    Product.findByIdAndUpdate(id, productData, { new: true })
    .then(updateProduct => {
        if(!updateProduct) {
            const error = new errorCreator(`Product with id ${id} not found`, 404)
            next(error)

        } else {
            res.json(updateProduct)
        }
       
    }).catch(err => {
        next(err)
    })

}

export const deleteProduct =  (req, res, next) => {

    const { id } = req.body;

    Product.findByIdAndDelete(id)
    .then(() => {
        res.status(204).send()
    }).catch(err => {
        next(err)
    })
}