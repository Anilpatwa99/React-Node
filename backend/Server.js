const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Connections/DB");

const app = express();
dotenv.config();

//PORT
const PORT = process.env.PORT || 8080 || 6000 || 7000;

// Establish the MongoDB connection
connectDB();

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Use the product routes
app.use("/products", require("./routes/Productroutes"));
app.use("/users", require("./routes/UserRoutes"));
app.use("/checkout", require("./routes/CheckOut.js"));
app.use("/uploads", express.static("uploads"));


//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to express",
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(
    `Server is Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
