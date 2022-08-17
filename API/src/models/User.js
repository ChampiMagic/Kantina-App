import { Schema, model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator"

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    studen: {
        type: Boolean,
        required: true
    }
})

schema.plugin(mongooseUniqueValidator);

export default model('Product', schema)