import mongoose from "mongoose";
const { Schema, model } = mongoose


const schema = new Schema({
    date: {
        type: Date,
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Product',
                required: true
            },
            count: {
                type: Number,
                required: true
            }
        }
    ]
}, {
    versionKey: false 
})

export default model('Purchase', schema)