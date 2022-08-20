import { configureStore } from "@reduxjs/toolkit";
import userController from "./slices/userSlice.js"

export const store = configureStore({
    reducer: {
        userController: userController
    },
})