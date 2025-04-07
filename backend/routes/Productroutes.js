const express = require("express");
const { upload } = require("../config/cloudinaryConfig");
const authmiddlewares = require("../middlewares/authmiddlewares");
const {
  popularproductController,
  featuredproductController,
  allproductController,
  addproductController,
} = require("../Controllers/productController");

const router = express.Router();

// Define a route to handle adding a new product
// Define route to add a new product with image upload
router.post("/add", upload.single("image"), addproductController);

// Define a route to get all products
router.get("/allproducts", allproductController);

router.get("/featured", featuredproductController);

router.get("/popular", popularproductController);

// Define a route to get product information by name, brand, or category
router.get("/search", async (req, res) => {
  try {
    // Extract the query parameters from the URL
    const { title, oldprice, category, price } = req.query;

    // Define a query object to filter the products
    const query = {};

    if (oldprice) {
      query.oldprice = oldprice;
    }

    if (category) {
      query.category = category;
    }

    if (price) {
      query.price = price;
    }

    if (title) {
      // Replace encoded spaces with actual spaces in the title
      query.title = title.replace(/%20/g, " ");
    }

    // Use the 'electronics' model to find products based on the query
    const products = await electronics.find(query);

    if (products.length === 0) {
      // If no products match the query, respond with a not found message
      res
        .status(404)
        .json({ message: "No products found for the given criteria" });
    } else {
      // If products are found, respond with the matching products
      res.status(200).json({ products });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
});

//http://localhost:3000/products/search
//http://localhost:3000/products/search?name=Product_Name
//http://localhost:3000/products/search?category=Category_Name
//http://localhost:3000/products/search?category=Category_Name

// Update product by ID
router.put("/update/:id", async (req, res) => {
  try {
    // Extract the product ID from the URL parameter
    const productId = req.params.id;

    // Find the product by its ID
    const product = await electronics.findById(productId);

    if (!product) {
      // If the product is not found, respond with a not found message
      res.status(404).json({ message: "Product not found" });
      return;
    }

    // Update all fields of the product based on the request body
    product.set(req.body);

    // Save the updated product to the database
    await product.save();

    // Respond with a success message
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
});

// DELETE a product by ID
router.delete("/delete/:_id", async (req, res) => {
  try {
    const productId = req.params._id;

    // Find and delete the product by its ID
    const deletedProduct = await electronics.findOneAndRemove({
      _id: productId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product deleted successfully" + deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update product by ID using HTTP PATCH
router.patch("/update/:id", async (req, res) => {
  try {
    // Extract the product ID from the URL parameter
    const productId = req.params.id;

    // Find the product by its ID
    const product = await electronics.findById(productId);

    if (!product) {
      // If the product is not found, respond with a not found message
      return res.status(404).json({ message: "Product not found" });
    }

    // Update specific fields of the product based on the request body
    if (req.body.title) {
      product.title = req.body.title;
    }

    if (req.body.description) {
      product.description = req.body.description;
    }

    if (req.body.price) {
      product.price = req.body.price;
    }

    if (req.body.discountPercentage) {
      product.discountPercentage = req.body.discountPercentage;
    }

    if (req.body.rating) {
      product.rating = req.body.rating;
    }

    if (req.body.stock) {
      product.stock = req.body.stock;
    }

    if (req.body.brand) {
      product.brand = req.body.brand;
    }

    if (req.body.category) {
      product.category = req.body.category;
    }

    if (req.body.thumbnail) {
      product.thumbnail = req.body.thumbnail;
    }

    if (req.body.images) {
      product.images = req.body.images;
    }

    // Save the updated product to the database
    await product.save();

    // Respond with a success message
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// DELETE a product by name
router.delete("/deleteByName/:name", async (req, res) => {
  try {
    const productName = req.params.name;

    // Find and delete the product by its name
    const deletedProduct = await electronics.findOneAndRemove({
      title: productName,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" + deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
