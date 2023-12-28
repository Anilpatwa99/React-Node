const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`MongoDB Server Issue ${error}`.bgRed.white);
    }
};

module.exports = connectDB;