const Product = require("../models/Productschema");
const multer = require("multer");
const path = require("path");

// Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save images in the "uploads" directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// Multer upload middleware
// const upload = multer({ storage: storage });

// Add product controller with image upload support
const addproductController = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    // Check if required fields are provided
    if (!req.body.title || !req.body.newprice || !req.body.category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new product with image filename
    const newProduct = new Product({
      id: req.body.id,
      title: req.body.title,
      oldPrice: req.body.oldPrice,
      newprice: req.body.newprice,
      ratings: req.body.ratings,
      imageUrl: req.file ? req.file.path : null, // Save image path
      category: req.body.category,
    });

    // Save the product in the database
    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res
      .status(500)
      .json({ error: "An error occurred", details: error.message });
  }
};

const allproductController = async (req, res) => {
  try {
    // Query the database to retrieve all products
    const products = await Product.find();

    // Respond with the list of products
    res.status(200).json(products);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
};

const featuredproductController = async (req, res) => {
  try {
    // Query the database to retrieve all products
    const products = await Product.find({ category: "featured" });

    // Respond with the list of products
    res.status(200).json(products);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
};

const popularproductController = async (req, res) => {
  try {
    // Query the database to retrieve all products
    const products = await Product.find({ category: "popular" });

    // Respond with the list of products
    res.status(200).json(products);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  addproductController,
  allproductController,
  featuredproductController,
  popularproductController,
  // upload,
};
