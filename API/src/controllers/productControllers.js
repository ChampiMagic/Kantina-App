import Product from "../models/Product.js";
import { errorCreator, ResponseCreator } from '../../utils/responseCreator.js'


//GET
export const getProduct =  async (req, res, next) => {

    const { group } = req.query;

    let searchProduct = [];

    try {
       
        if(group)  searchProduct = await Product.find({group})
    
        else searchProduct = await  Product.find({})

        res.json(new ResponseCreator(null, 200, searchProduct))

    } catch (err) {
        next(err)
     }
}

export const getProductById = (req, res, next) => {
    const { id } = req.query;

    if(!id) next(new errorCreator('Query is invalid or incorrect', 400))

    else {

        Product.findById(id)
        .then(product => {

            !product 
                ? next(new errorCreator('Product not Found', 404))
                : res.json(new ResponseCreator(null, 200, product))

        }).catch(err => {
            next(err)
        })
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
            res.json(new ResponseCreator(null, 200, searchProduct))
        }
    }
    
    
}


//POST
export const createProduct =  (req, res, next) => {

    const productData = req.body

    Product.create(productData)
     .then(newProduct => {
        res.status(201).json(new ResponseCreator("Product Created", 201, newProduct))
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
            res.json(new ResponseCreator("Product Updated", 200, updateProduct))
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
        res.status(204).send(new ResponseCreator("Product Deleted", 204, null))
    }).catch(err => {
        next(err)
    })
}