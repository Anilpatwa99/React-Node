import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/features/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";

function Card_Container({ id, title, newprice, oldprice, image }) {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [goToCart, setGoToCart] = useState(false);

  // const handleAddtoCart = () => {
  //   const isAlreadyAdded = cartItems.some((item) => item.id === id);

  //   if (!isAlreadyAdded) {
  //     const newItem = {
  //       id,
  //       title,
  //       newprice,
  //       oldprice,
  //       image,
  //     };
  //     // Dispatch action to add the product to the cart
  //     dispatch(setCart([...cartItems, newItem]));
  //     setGoToCart(true);
  //   }
  // };
  const handleAddtoCart = () => {
    dispatch(
      setCart({
        id,
        title,
        newprice,
        oldprice,
        image,
      })
    );
    setGoToCart(true);
  };

  const handleGoToCart = () => {
    // Navigate to the cart page
    setGoToCart(true);
    navigate("/addtocart");
  };

  return (
    <div className="card ">
      <div className="card-image">
        <img src={image} alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          <span>{title} </span>
          <span>Rate Product</span>
        </h5>
        <h5 className="card-title d-flex justify-content-between">
          <span>
            {newprice}{" "}
            <span className="text-secondary text-decoration-line-through fs-6">
              {oldprice}
            </span>
            <span className="text-success fs-6 ms-2">50%off</span>{" "}
          </span>
          <span className="text-warning">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular  fa-star" />
            <i className="fa-regular fa-star" />
          </span>
        </h5>
        <h5 className="text-center">
          <button
            className={`Add-to-cart ${
              cartItems.some((item) => item.id === id) ? "d-none" : ""
            }`}
            onClick={() => handleAddtoCart()}
          >
            Add to Cart
          </button>
          <button
            className={`Add-to-cart ${
              cartItems.some((item) => item.id === id) ? "" : "d-none"
            }`}
            onClick={handleGoToCart}
          >
            Go to Cart
          </button>
        </h5>
      </div>
    </div>
  );
}

export default Card_Container;
