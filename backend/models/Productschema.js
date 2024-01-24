const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

// Create the product model
const Products = mongoose.model("products", productSchema);

// Export the model
module.exports = Products;