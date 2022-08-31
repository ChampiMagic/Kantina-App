import { createSlice } from "@reduxjs/toolkit";


export const productController = createSlice({
    name: 'productController',
    initialState: {
        products: {},
        count: 0
    },
    reducers: {
        addProduct: (state, action) => {

            state.count += 1

            const {_id} = action.payload

            if(state.products.hasOwnProperty(_id)) {
                state.products[_id].count = state.products[_id].count + 1
            } else {
                state.products[_id] =  {...action.payload, count: 1}
            }
           
        },
        deleteProduct: (state, action) => {
           
            state.count -= 1

            const {_id} = action.payload
           

            if(state.products[_id].count === 1) {
                let newObj = {}

                for (const [key, value] of Object.entries(state.products)) {
                    if(key !== _id) newObj[key] = value
                  }
                
                state.products = newObj
            } else {
                state.products[_id].count = state.products[_id].count - 1
            }

        }
    },
})

export const { addProduct, deleteProduct, productsCount } = productController.actions

export default productController.reducer