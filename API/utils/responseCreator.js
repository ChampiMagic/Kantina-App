export class ResponseCreator {
    constructor(message, statusCode, response) {
        this.message = message? message : "Successful"
        this.statusCode = statusCode
        this.response = response
    }
}

export class errorCreator extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode
    }
}
