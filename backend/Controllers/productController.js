const Product = require("../models/Productschema");

const addproductController = async (req, res) => {
  try {
    // Create a new product based on the request body
    const newProduct = new Product(req.body);

    // Save the new product to the database
    await newProduct.save();

    // Respond with a success message
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
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
  popularproductController
};
