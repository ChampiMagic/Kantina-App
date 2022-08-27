//import redux-toolkit
import { configureStore, combineReducers } from "@reduxjs/toolkit";

//import middleware
import thunk from 'redux-thunk'

//import redux-persist
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

//Reducers
import userReducer from "./slices/userSlice.js"

//combined reducers
const rootReducer = combineReducers({ 
    userController: userReducer,
  })

//config persist reducers
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

//create persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)