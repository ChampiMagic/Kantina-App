//import other things
import cors from 'cors';
import 'dotenv/config';
import errorHandler from './utils/errorHandler.js';
import router from './src/routes/index.js';

//initialization of MongoDB
import './db.js'

//initialization of App
import express from 'express';
const app = express();

//Importing Product Model
import Product from './src/models/Product.js'


//Config of App Middlewares
app.use(express.json())
app.use(cors())





app.use('/api', router)

app.use(errorHandler)


app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})