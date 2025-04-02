// // import React from 'react'
// // import './AddToCart.css'
// // import { useSelector } from 'react-redux';

// // const AddToCart = () => {
// //     const cartItems = useSelector((state) => state.cart.cart);
// //     return (
// //         <div className="Cart-box before-footer-section pt-5  pb-5 ">
// //             <div className="container  ">
// //                 <div className="row mb-5   ">
// //                     <form className="col-md-12  cart-form " method="post">
// //                         <div className="site-blocks-table    ">
// //                             <table className="table">
// //                                 <thead className>
// //                                     <tr className='border rounded'>
// //                                         <th className=" fs-5">Image</th>
// //                                         <th className=" fs-5  ">Product</th>
// //                                         <th className="  fs-5">Price</th>
// //                                         <th className=" fs-5">Quantity</th>
// //                                         <th className="  fs-5">Total</th>
// //                                         <th className=" fs-5">Remove</th>
// //                                     </tr>
// //                                 </thead>
// //                                 <tbody>
// //                                 {cartItems.map((item) => (
// //                                     <tr>
// //                                         <td className="product-thumbnail p-4  bg-transparent">
// //                                             <img src={item.image} alt="Image" className="img-fluid" />
// //                                         </td>
// //                                         <td className="  pt-4 bg-transparent">
// //                                             <h2 className="h5  text-start  ">{item.id}</h2>
// //                                         </td>
// //                                         <td className="  pt-4  bg-transparent">{item.oldprice}</td>
// //                                         <td className=" bg-transparent">
// //                                             <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }}>
// //                                                 <div className="input-group-prepend">
// //                                                     <button className=" cart-btn border-0 border rounded ps-2 pe-2  " onclick="decrease( )" type="button"><i className="fa-solid fa-minus" /></button>
// //                                                 </div>
// //                                                 <h1><span id="count" className="fs-5 ms-3 me-3"> 0</span></h1>
// //                                                 <div className="input-group-append">
// //                                                     <button className="cart-btn border-0 border rounded ps-2 pe-2 " onclick="increase( )" type="button"><i className="fa-solid fa-plus" /></button>
// //                                                 </div>
// //                                             </div>
// //                                         </td>
// //                                         <td className=" pt-4 bg-transparent">$49.00</td>
// //                                         <td className=" pt-4 bg-transparent "><a href="#" className=" ms-4 "><i className="fa-solid fa-trash text-dark  " /></a></td>
// //                                     </tr>

// //                                 ))}
// //                                 </tbody>
// //                             </table>
// //                         </div>
// //                     </form>
// //                 </div>
// //                 <div className="row   ">
// //                     <div className="col-md-6">
// //                         <div className="row mb-5">
// //                             <div className="col-md-6 mb-3 mb-md-0">
// //                                 <button className="cart-btn border-0">Update Cart</button>
// //                             </div>
// //                             <div className="col-md-6">
// //                                 <button className="cart-btn border-0">Continue Shopping</button>
// //                             </div>
// //                         </div>
// //                         <div className="row">
// //                             <div className="col-md-12">
// //                                 <label className="text-black h4" htmlFor="coupon">Coupon</label>
// //                                 <p>Enter your coupon code if you have one.</p>
// //                             </div>
// //                             <div className="col-md-8 mb-3 mb-md-0">
// //                                 <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
// //                             </div>
// //                             <div className="col-md-4">
// //                                 <button className="cart-btn border-0">Apply Coupon</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="cart-totals col-md-6 pl-5">
// //                         <div className="row justify-content-end">
// //                             <div className="col-md-7">
// //                                 <div className="row">
// //                                     <div className="col-md-12 text-right border-bottom mb-5">
// //                                         <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
// //                                     </div>
// //                                 </div>
// //                                 <div className="row mb-3">
// //                                     <div className="col-md-6">
// //                                         <span className="text-black">Subtotal</span>
// //                                     </div>
// //                                     <div className="col-md-6 text-right">
// //                                         <strong className="text-black">$230.00</strong>
// //                                     </div>
// //                                 </div>
// //                                 <div className="row mb-5">
// //                                     <div className="col-md-6">
// //                                         <span className="text-black">Total</span>
// //                                     </div>
// //                                     <div className="col-md-6 text-right">
// //                                         <strong className="text-black">$230.00</strong>
// //                                     </div>
// //                                 </div>
// //                                 <div className="row">
// //                                     <div className="col-md-12">
// //                                         <button className="cart-btn border-0" onclick="window.location='checkout.html'">Proceed To Checkout</button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>

// //     );
// // }

// // export default AddToCart

// import React from "react";
// import "./AddToCart.css";
// import { useSelector } from "react-redux";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("your-publishable-key-here");

// const AddToCart = () => {
//   const cartItems = useSelector((state) => state.cart.cart);

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.oldprice * item.quantity,
//       0
//     );
//   };

//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const response = await fetch("/create-checkout-session", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ items: cartItems }),
//     });

//     const session = await response.json();
//     await stripe.redirectToCheckout({ sessionId: session.id });
//   };

//   return (
//     <div className="Cart-box before-footer-section pt-5 pb-5">
//       <div className="container">
//         <div className="row mb-5">
//           <form className="col-md-12 cart-form" method="post">
//             <div className="site-blocks-table">
//               <table className="table">
//                 <thead>
//                   <tr className="border rounded">
//                     <th className="fs-5">Image</th>
//                     <th className="fs-5">Product</th>
//                     <th className="fs-5">Price</th>
//                     <th className="fs-5">Quantity</th>
//                     <th className="fs-5">Total</th>
//                     <th className="fs-5">Remove</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td className="product-thumbnail p-4 bg-transparent">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="img-fluid"
//                         />
//                       </td>
//                       <td className="pt-4 bg-transparent">
//                         <h2 className="h5 text-start">{item.title}</h2>
//                       </td>
//                       <td className="pt-4 bg-transparent">{item.newprice}</td>
//                       <td className="pt-4 bg-transparent">{item.quantity}</td>
//                       <td className="pt-4 bg-transparent">
//                         ${(item.newprice * item.quantity).toFixed(2)}
//                       </td>
//                       <td className="pt-4 bg-transparent">
//                         <button className="btn btn-danger">Remove</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </form>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <h4>Coupon</h4>
//             <input
//               type="text"
//               className="form-control py-3"
//               placeholder="Coupon Code"
//             />
//             <button className="cart-btn border-0 mt-2">Apply Coupon</button>
//           </div>
//           <div className="cart-totals col-md-6 pl-5">
//             <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
//             <div className="row mb-3">
//               <div className="col-md-6">Subtotal</div>
//               <div className="col-md-6 text-right">
//                 ${calculateTotal().toFixed(2)}
//               </div>
//             </div>
//             <div className="row">
//               <button className="cart-btn border-0" onClick={handleCheckout}>
//                 Proceed To Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;

import React from "react";
import "./AddToCart.css";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/features/cartSlice.js";

const stripePromise = loadStripe(
  "pk_test_51R5QgqB97wIJjvI77DeXO0ifSquMdBiO2dpxBvsh7mu9yvhRiuVbL8V4bJcQxMI9iSbbdokNleY4cVqRnZQvbFla00QB8TKVtj"
);

const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  console.log(cartItems);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + parseInt(item.newprice.replace(/[^0-9.]/g, "")) * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    console.log("chekout clicked");
    const stripe = await stripePromise;
    const response = await fetch(
      "http://localhost:8000/checkout/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      }
    );

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="Cart-box before-footer-section pt-5 pb-5">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12 cart-form" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr className="border rounded">
                    <th className="fs-5">Image</th>
                    <th className="fs-5">Product</th>
                    <th className="fs-5">Price</th>
                    <th className="fs-5">Quantity</th>
                    <th className="fs-5">Total</th>
                    <th className="fs-5">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={item.id}>
                      <td className="product-thumbnail p-4 bg-transparent">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </td>
                      <td className="pt-4 bg-transparent">
                        <h2 className="h5 text-start">{item.title}</h2>
                      </td>
                      <td className="pt-4 bg-transparent">{item.newprice}</td>
                      <td className="pt-4 bg-transparent">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                      </td>

                      <td className="pt-4 bg-transparent">
                        {parseInt(item.newprice.replace(/[^0-9.]/g, "")) *
                          item.quantity}
                      </td>
                      <td className="pt-4 bg-transparent">
                        <button
                          className="btn btn-danger"
                          onClick={() => dispatch(removeItem(item.id))}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>Coupon</h4>
            <input
              type="text"
              className="form-control py-3"
              placeholder="Coupon Code"
            />
            <button className="cart-btn border-0 mt-2">Apply Coupon</button>
          </div>
          <div className="cart-totals col-md-6 pl-5">
            <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
            <div className="row mb-3">
              <div className="col-md-6">Subtotal</div>
              <div className="col-md-6 text-right">
                ${calculateTotal().toFixed(2)}
              </div>
            </div>
            <div className="row">
              <button className="cart-btn border-0" onClick={handleCheckout}>
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
