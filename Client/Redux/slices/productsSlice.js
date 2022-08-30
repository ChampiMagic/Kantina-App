import { createSlice } from "@reduxjs/toolkit";


export const productController = createSlice({
    name: 'productController',
    initialState: {
        products: {}
    },
    reducers: {
        addProduct: (state, action) => {

            const id = action.payload

            if(state.products.hasOwn(id)) {
                state.products.id = state.products.id + 1
            } else {
                state.products.id = 1 
            }
           
        },
        deleteProduct: (state, action) => {
           
            const id = action.payload
           

            if(state.products.id === 0) {
                let newObj = {}

                for (const [key, value] of Object.entries(state.products)) {
                    if(key !== id) newObj[key] = value
                  }
                
                state.products = newObj
            } else {
                state.products.id = state.products.id - 1
            }

        }
    },
})

export const { addProduct, deleteProduct } = productController.actions

export default productController.reducer