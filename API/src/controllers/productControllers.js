//import model
import Product from "../models/Product.js";

//import constructor
import { errorCreator, ResponseCreator } from '../../utils/responseCreator.js'


//  -----PRIVATE CONTROLLERS-----  //

//GET
export const getProduct =  async (req, res, next) => {

    const { group } = req.query;

    let searchProduct = [];

    try {
       
        if(group)  searchProduct = await Product.find({group})
    
        else searchProduct = await  Product.find({})

        res.json(new ResponseCreator(null, 200, {products: searchProduct}))

    } catch (err) {

        console.log("ERROR: PRODUCTCONTROLLER(getProduct)")
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
                : res.json(new ResponseCreator(null, 200, {products: product}))

        }).catch(err => {

            console.log("ERROR: PRODUCTCONTROLLER(getProductById)")
            next(err)
        })
    }
    
}

export const getProductByName = async (req, res, next) => {

    const { name } = req.query;

    if(!name) next(new errorCreator('Query is invalid or incorrect', 400))

    else {

        try {

            const allProducts = await Product.find({})

            const searchProduct = allProducts.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))

            if(!searchProduct.length) next(new errorCreator('Product not Found', 404))
            else {

                res.json(new ResponseCreator(null, 200, {products: searchProduct}))
            }

        } catch(err) {

            console.log("ERROR: PRODUCTCONTROLLER(getProductByName)")
            next(err)
        }
        
    }
    
    
}

export const getGroups = async (req, res, next) => {

    const allProducts = await Product.find({});

    let groups = []

    allProducts.forEach(product => {
        if(!groups.find(g => g === product.group)) {
            groups.push(product.group)
        }
    })

    if(!groups.length) next(new errorCreator('groups not Found', 404))
    else {
        res.json(new ResponseCreator(null, 200, {groups}))
    }
    

}



//POST
export const createProduct =  (req, res, next) => {

    if(!req.userData.isStudent) {

        const productData = req.body

        Product.create(productData)
        .then(newProduct => {

            res.status(201).json(new ResponseCreator("Product Created", 201, {products: newProduct}))

        }).catch(err => {

            console.log("ERROR: PRODUCTCONTROLLER(createProduct)")
            next(err)
        })
    } else {

        res.send(errorCreator("Unauthorized user", 401))
    }

    
}


//PUT
export const updateProduct =  (req, res, next) => {

    if(!req.userData.isStudent) {


        const { id, productData } = req.body;

        Product.findByIdAndUpdate(id, productData, { new: true })
        .then(updateProduct => {

            if(!updateProduct) {

                const error = new errorCreator(`Product with id ${id} not found`, 404)
                next(error)

            } else {

                res.json(new ResponseCreator("Product Updated", 200, {products: updateProduct}))
            }
        
        }).catch(err => {

            console.log("ERROR: PRODUCTCONTROLLER(updateProduct)")
            next(err)
        })

    } else {
        res.send(errorCreator("Unauthorized user", 401))
    }

}


//DELETE
export const deleteProduct =  (req, res, next) => {

    if(!req.userData.isStudent) {
        

        const { id } = req.body;

        Product.findByIdAndDelete(id)
        .then(() => {

            res.status(204).send(new ResponseCreator("Product Deleted", 204, null))
        }).catch(err => {

            console.log("ERROR: PRODUCTCONTROLLER(deleteProduct)")
            next(err)
        })

    } else {

        res.send(errorCreator("Unauthorized user", 401))
    }

}


//  -----PUBLIC CONTROLLERS-----  //

