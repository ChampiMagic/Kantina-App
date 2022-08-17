import { errorCreator } from "./responseCreator.js"

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
  
    if (err.code === 11000) {
      const message = 'Campo duplicado, ya existe un registro con ese valor'
      error = new errorCreator(message, 400)
    }
  
    if (err.name === 'CastError') {
      const message = 'Campo invalido'
      error = new errorCreator(message, 400)
    }
  
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(val => val.message)
      error = new errorCreator(message, 400)
    }

    res.status(error.statusCode || 500).json({message: error.message|| 'Server Error'})
}

export default errorHandler