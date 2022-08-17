
const errorHandler = (error, req, res, next) => {

    console.log("This was the error", error.name)

    res.status(500).send("")
}

export default errorHandler