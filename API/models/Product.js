import mongoose from "mongoose";
const { Schema, model } = mongoose
import mongooseUniqueValidator from "mongoose-unique-validator"


const schema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true,
        minlength: 3
    },
    class: {
        type: String,
        require: true,
        minlength: 3
    },
    price: {
        type: Number,
        require: true
    }
}, {
    versionKey: false 
})

schema.plugin(mongooseUniqueValidator);

export default model('Product', schema)