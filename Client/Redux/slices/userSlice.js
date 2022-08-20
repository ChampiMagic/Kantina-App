import { createSlice } from "@reduxjs/toolkit";


export const userController = createSlice({
    name: 'userController',
    initialState: {
        user: {}
    },
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload
        },
        deleteUser: (state) => {
            state.user = {}
        },
        updateUser: (state, action) => {
            state.user = action.payload
        },
    },
})

export const { saveUser, deleteUser, updateUser } = userController.actions

export default userController.reducer