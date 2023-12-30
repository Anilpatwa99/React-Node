import React from 'react'
import './AddToCart.css'


const AddToCart = () => {
    return (
        <div className="Cart-box before-footer-section pt-5  pb-5 ">
            <div className="container  ">
                <div className="row mb-5   ">
                    <form className="col-md-12  cart-form " method="post">
                        <div className="site-blocks-table    ">
                            <table className="table">
                                <thead className>
                                    <tr className='border rounded'>
                                        <th className=" fs-5">Image</th>
                                        <th className=" fs-5  ">Product</th>
                                        <th className="  fs-5">Price</th>
                                        <th className=" fs-5">Quantity</th>
                                        <th className="  fs-5">Total</th>
                                        <th className=" fs-5">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-thumbnail p-4  bg-transparent">
                                            <img src="./images/w2.png" alt="Image" className="img-fluid" />
                                        </td>
                                        <td className="  pt-4 bg-transparent">
                                            <h2 className="h5  text-start  ">Product 1</h2>
                                        </td>
                                        <td className="  pt-4  bg-transparent">$49.00</td>
                                        <td className=" bg-transparent">
                                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }}>
                                                <div className="input-group-prepend">
                                                    <button className=" cart-btn border-0 border rounded ps-2 pe-2  " onclick="decrease( )" type="button"><i className="fa-solid fa-minus" /></button>
                                                </div>
                                                <h1><span id="count" className="fs-5 ms-3 me-3"> 0</span></h1>
                                                <div className="input-group-append">
                                                    <button className="cart-btn border-0 border rounded ps-2 pe-2 " onclick="increase( )" type="button"><i className="fa-solid fa-plus" /></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=" pt-4 bg-transparent">$49.00</td>
                                        <td className=" pt-4 bg-transparent "><a href="#" className=" ms-4 "><i className="fa-solid fa-trash text-dark  " /></a></td>
                                    </tr>
                                    <tr>
                                        <td className="product-thumbnail p-4  bg-transparent">
                                            <img src="./images/w2.png" alt="Image" className="img-fluid" />
                                        </td>
                                        <td className="  pt-4 bg-transparent">
                                            <h2 className="h5  text-start  ">Product 1</h2>
                                        </td>
                                        <td className="  pt-4  bg-transparent">$49.00</td>
                                        <td className=" bg-transparent">
                                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }}>
                                                <div className="input-group-prepend">
                                                    <button className=" cart-btn border-0 border rounded ps-2 pe-2  " onclick="decrease( )" type="button"><i className="fa-solid fa-minus" /></button>
                                                </div>
                                                <h1><span id="count" className="fs-5 ms-3 me-3"> 0</span></h1>
                                                <div className="input-group-append">
                                                    <button className="cart-btn border-0 border rounded ps-2 pe-2 " onclick="increase( )" type="button"><i className="fa-solid fa-plus" /></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=" pt-4 bg-transparent">$49.00</td>
                                        <td className=" pt-4 bg-transparent "><a href="#" className=" ms-4"><i className="fa-solid fa-trash  text-dark  " /></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
                <div className="row   ">
                    <div className="col-md-6">
                        <div className="row mb-5">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <button className="cart-btn border-0">Update Cart</button>
                            </div>
                            <div className="col-md-6">
                                <button className="cart-btn border-0">Continue Shopping</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                                <p>Enter your coupon code if you have one.</p>
                            </div>
                            <div className="col-md-8 mb-3 mb-md-0">
                                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                            </div>
                            <div className="col-md-4">
                                <button className="cart-btn border-0">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-totals col-md-6 pl-5">
                        <div className="row justify-content-end">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 text-right border-bottom mb-5">
                                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="cart-btn border-0" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>







    );
}

export default AddToCart
