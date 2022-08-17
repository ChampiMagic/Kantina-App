//import other things
import cors from 'cors';
import 'dotenv/config';
import errorHandler from './utils/errorHandlers/RouteHandler.js';

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
app.use(errorHandler)


app.get('/', (req, res) => {

    res.send("Hello World")
})

app.get('/product', async (req, res) => {

    const allProducts = await Product.find({});

    res.send(allProducts)
})

app.post('/product', async (req, res) => {

    const body = req.body;

    const newProduct = await Product.create(body)

    res.status(201).send(newProduct)
})



app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})