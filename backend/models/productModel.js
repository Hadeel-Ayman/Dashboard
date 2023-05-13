const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    userId: {
        type: String,
        trim: true,
        unique: true
    },
    company: {
        type: String,
        trim: true,
    },
})

const ProductModel = mongoose.model('Product', ProductSchema)
module.exports = ProductModel