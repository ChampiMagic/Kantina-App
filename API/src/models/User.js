import mongoose from "mongoose";
const { Schema, model } = mongoose
import mongooseUniqueValidator from "mongoose-unique-validator"

const schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    passwordHash: {
        type: String,
        required: true,
        minlength: 8
    },
    date: {
        type: Date,
        default: null
    },
    genre: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    imageKey: {
        type: String,
        default: "unknownUser.png"
    },
    isStudent: {
        type: Boolean,
        required: true
    }
},{
    versionKey: false 
})

schema.plugin(mongooseUniqueValidator);

schema.set('toJSON', {
   transform: (document, returnedObject) => {

    //we dont send the user password
    delete returnedObject.passwordHash

   }
})


export default model('User', schema)