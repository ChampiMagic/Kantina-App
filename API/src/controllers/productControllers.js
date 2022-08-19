import Product from "../models/Product.js";
import { errorCreator } from '../../utils/responseCreator.js'


//GET
export const getProduct =  async (req, res, next) => {

    const { id, group } = req.query;

    let searchProduct = [];


    try {
       
        if(group)  searchProduct = await Product.find({group})
    
        else if(id) searchProduct = await Product.findById(id)
    
        else searchProduct = await  Product.find({})

        res.json(searchProduct)

    } catch (err) {
        next(err)
     }
}

export const getProductByName = async (req, res, next) => {
    const { name } = req.query;

    if(!name) next(new errorCreator('Query is invalid or incorrect', 400))

    else {

        const allProducts = await Product.find({})

        const searchProduct = allProducts.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))

        if(!searchProduct.length) next(new errorCreator('Product not Found', 404))

        else {
            res.json(searchProduct)
        }
    }
    
    
}


//POST
export const createProduct =  (req, res, next) => {

    const productData = req.body

    Product.create(productData)
     .then(newProduct => {
        res.status(201).json(newProduct)
     }).catch(err => {
        next(err)
     })
}

//PUT
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

//DELETE
export const deleteProduct =  (req, res, next) => {

    const { id } = req.body;

    Product.findByIdAndDelete(id)
    .then(() => {
        res.status(204).send()
    }).catch(err => {
        next(err)
    })
}