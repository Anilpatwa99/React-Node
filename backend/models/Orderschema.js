const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "users" }, // This creates a relation with the User model
    products: [
        {
            product: { type: mongoose.Types.ObjectId, ref: "products" }, // Assuming there is a Product model
            quantity: { type: Number, default: 1 },
            // You can add more fields related to products in the order as needed
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;