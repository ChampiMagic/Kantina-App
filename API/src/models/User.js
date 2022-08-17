import mongoose from "mongoose";
const { Schema, model } = mongoose
import mongooseUniqueValidator from "mongoose-unique-validator"

const schema = new Schema({
    username: {
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
    isStudent: {
        type: Boolean,
        required: true
    }
})

schema.plugin(mongooseUniqueValidator);

schema.set('toJSON', {
   transform: (document, returnedObject) => {

    //we dont send the user password
    delete returnedObject.passwordHash

   }
},{
    versionKey: false 
})


export default model('User', schema)