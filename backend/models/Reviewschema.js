const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "users" }, // This creates a relation with the User model
    posts: [
        {
            title: { type: String, required: true },
            content: { type: String, required: true },
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

const Reviews = mongoose.model("Reviews", ReviewsSchema);

module.exports = Reviews;