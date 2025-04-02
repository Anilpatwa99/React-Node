// // routes/checkout.js
// // import { createCheckoutSession } from "../Controllers/checkoutController";

// const express = require("express");
// const authMiddleware = require("../middlewares/authmiddlewares");

// const { createCheckoutSession } = require("../Controllers/checkoutController");


// const router = express.Router();

// // Define the "/create-checkout-session" route
// router.post("/create-checkout-session", createCheckoutSession);

// module.exports = router;

const express = require("express"); 
const { createCheckoutSession } = require("../Controllers/checkoutController");

const router = express.Router();

router.post("/create-checkout-session", createCheckoutSession);

module.exports = router; 
