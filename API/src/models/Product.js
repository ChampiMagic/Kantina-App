import mongoose from "mongoose";
const { Schema, model } = mongoose
import mongooseUniqueValidator from "mongoose-unique-validator"


const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    group: {
        type: String,
        required: true,
        minlength: 3
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false 
})

schema.plugin(mongooseUniqueValidator);

export default model('Product', schema)