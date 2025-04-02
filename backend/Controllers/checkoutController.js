// import stripe from "stripe";
// const stripeInstance = stripe(
//   "sk_test_51R5QgqB97wIJjvI7Lbtdtz1QkR1JsVKiPiuf6ydX626i8HAGHVK3IMbSLQr0uhl5sKi38iTZrsA2VFUMzQrYLFpD00Q8ljVSS6"
// );

// // Define a function to create a checkout session
// export const createCheckoutSession = async (req, res) => {
//   const { products } = req.body;

//   const lineItems = products.map((product) => {
//     const { title, image, category, price, quantity } = product; // Destructure the product object
//     return {
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: title,
//           images: [image],
//           metadata: {
//             category: category, // Correctly structure the category property
//           },
//         },
//         unit_amount: price * 100,
//       },
//       quantity: quantity, // Use the correct field name "quantity"
//     };
//   });

//   const session = await stripeInstance.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:3000/success",
//     cancel_url: "http://localhost:3000/cancel",
//   });

//   res.json({ id: session.id });
// };

// export default {
//   createCheckoutSession,
// };

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const createCheckoutSession = async (req, res) => {
//   try {
//     const { products } = req.body;
//     console.log(products);

//     const lineItems = products.map((product) => {
//       const { title, image, category, price, quantity } = product;
//       return {
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: title,
//             images: [image],
//             metadata: {
//               category: category,
//             },
//           },
//           unit_amount: price * 100,
//         },
//         quantity: quantity,
//       };
//     });

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error("Error creating checkout session:", error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// };

const createCheckoutSession = async (req, res) => {
  try {
    const { products } = req.body;

    const lineItems = products.map((product) => {
      const { title, image, newprice, quantity } = product;

      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: title,
            images: [image],
          },
          unit_amount: parseInt(newprice.replace(/[^0-9.]/g, ""), 10) * 100, // Fix price formatting
        },
        quantity: quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// ✅ CommonJS ke hisaab se export karein
module.exports = { createCheckoutSession };
