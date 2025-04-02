import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductDes.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDescription = () => {
  
  const { params } = useParams();
  const [product, setProduct] = useState([]);
  const productId = parseInt(params);
  console.log(productId);
  
  useEffect(() => {
    const apiUrl = `http://localhost:8000/products/allproducts`;

    const fetchProductData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        // Find the product in the array based on productId
        const filteredProduct = data.find(
          (product) => product.id === productId
        );

        setProduct(filteredProduct);
      } catch (error) {
        console.log(`Error Occurred: ${error}`);
      }
    };

    fetchProductData();
  }, [productId]);

  console.log(product.imageUrl);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <section className="Product-page ">
      <div className="container">
        <div className="Product-details d-flex  justify-content-evenly pt-5">
          <div className="">
            <div className="product border rounded border-secondary pt-3  ">
              <h2 className="bg-transparent">
                {" "}
                <i className="fa-regular fa-heart me-5" />{" "}
                <i className="fa-solid fa-share me-5" />
              </h2>
              <img src="../../public/images/w5.png" alt="" />
            </div>
            <div className="Product-Slider pe-2 mt-5">
              <Slider {...settings}>
                <div className="Inner-slider border rounded border-secondary">
                  <img src={product.imageUrl} alt="" />
                </div>
                <div className="Inner-slider border rounded border-secondary">
                  <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335103/Croma%20Assets/Communication/Mobile%20Accessories/Images/273080_5_mopooe.png?tr=w-640"
                    alt=""
                  />
                </div>
                <div className="Inner-slider border rounded border-secondary">
                  <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335103/Croma%20Assets/Communication/Mobile%20Accessories/Images/273080_5_mopooe.png?tr=w-640"
                    alt=""
                  />
                </div>
                <div className="Inner-slider border rounded border-secondary">
                  <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335103/Croma%20Assets/Communication/Mobile%20Accessories/Images/273080_5_mopooe.png?tr=w-640"
                    alt=""
                  />
                </div>
                <div className="Inner-slider border rounded border-secondary">
                  <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335103/Croma%20Assets/Communication/Mobile%20Accessories/Images/273080_5_mopooe.png?tr=w-640"
                    alt=""
                  />
                </div>
                <div className="Inner-slider border rounded border-secondary">
                  <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689335103/Croma%20Assets/Communication/Mobile%20Accessories/Images/273080_5_mopooe.png?tr=w-640"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="product-des ">
            <div className="info">
              <div className="title fs-4">{product.title}</div>
              <div className="price mt-3 fs-4">
                ₹{product.price} <br />
                <p className="price-tax">(Incl.all Taxes)</p>
              </div>
              <hr className />
              <div className="price-info">
                <span className="mrp text-decoration-line-through text-secondary me-2">
                  MRP: ₹{product.oldPrice}
                </span>
                
                <span>(Save ₹3,117, 62.35% off)</span>
              </div>
              <div className="savings mt-2">Super Savings (2 OFFERS)</div>
              <hr className="border-2 horizontal " />
              <div className="banks d-flex ">
                <div className="bank border rounded border-secondary ">
                  <div className="bank-title  border-bottom border-secondary p-1 text-center">
                    HDFC Bank
                  </div>
                  <div className="bank-details p-2">
                    10% Instant Discount upto Rs.3000 on HDFC Bank Credit card .
                    This should be the only product in your cart to avail the
                    offer. Select the offer from “View all offers ”on payment
                    page T&amp;C Apply. View more
                  </div>
                </div>
                <div className="bank border rounded border-secondary ">
                  <div className="bank-title  border-bottom border-secondary p-1 text-center">
                    HDFC Bank
                  </div>
                  <div className="bank-details p-2">
                    10% Instant Discount upto Rs.3000 on HDFC Bank Credit card .
                    This should be the only product in your cart to avail the
                    offer. Select the offer from “View all offers ”on payment
                    page T&amp;C Apply. View more
                  </div>
                </div>
                <div className="bank border rounded border-secondary ">
                  <div className="bank-title  border-bottom border-secondary p-1 text-center">
                    HDFC Bank
                  </div>
                  <div className="bank-details p-2">
                    10% Instant Discount upto Rs.3000 on HDFC Bank Credit card .
                    This should be the only product in your cart to avail the
                    offer. Select the offer from “View all offers ”on payment
                    page T&amp;C Apply. View more
                  </div>
                </div>
              </div>
              <div className="delivery-add p-2 border rounded border-0 mt-3 ps-4">
                Delivery at:
                <span>
                  Mumbai, 400049 <br />
                  Not Available for your pincode{" "}
                </span>
              </div>
              <div className="key-feature ps-3 pt-3 border rounded border-secondary mt-3 ">
                <h3 className="fs-5">Key Features</h3>
                <ul>
                  <li>Power Output: 40W</li>
                  <li>Fast Charging: Yes</li>
                  <li>Output Port: 2 Type C</li>
                  <li>Cable Included: No</li>
                  <li>12 Months Warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-transparent bg-transparent mb-5 border rounded border-secondary p-3 mt-5">
          <h2
            className="accordion-header bg-transparent border rounded border-0 pb-2 "
            id="headingOne"
          >
            <button
              className="accordion-button fs-4  text-light d-flex justify-content-"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="fw-bold fs-5">Specifications</span>
              <h2 className="pe-3 bg-transparent">
                <i className="fa-solid fa-caret-down" />
              </h2>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="specification-title fw-bold fs-5">
                PRODUCT CATEGORY
              </div>
              <div className="specification-des mt-4">
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
              </div>
              <hr />
              <div className="specification-title fw-bold fs-5">
                PRODUCT CATEGORY
              </div>
              <div className="specification-des mt-4">
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
              </div>
              <hr />
              <div className="specification-title fw-bold fs-5">
                PRODUCT CATEGORY
              </div>
              <div className="specification-des mt-4">
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
                <div className="specification-des1">
                  <h2 className="bg-transparent">Device type</h2>
                  <h3>Truly Wireless Earbuds</h3>
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="border-1 p-2 bg-transparent  border rounded  text-light">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-transparent mb-5 border rounded border-secondary p-3 mt-5">
          <h2
            className="accordion-header bg-transparent border rounded border-0 pb-2 "
            id="headingOne"
          >
            <button
              className="accordion-button fs-4  text-light d-flex justify-content-"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="fw-bold fs-5">Overviews</span>
              <h2 className="pe-3 bg-transparent">
                <i className="fa-solid fa-caret-down" />
              </h2>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="specification-des mt-4">
                <p>
                  <b>Supports Fast Charging</b>
                  <br />
                  <br />
                  With a power output of 2.4A, the Croma 30W Type-C Fast Wall
                  Charger Adapter ensures swift and efficient charging for your
                  phone. Moreover, with fast-charging protocols, this adapter
                  takes your device's battery from zero to full in no time. So,
                  on days when you're in a hurry to leave the house, you can
                  quickly power up your device with this adapter.
                  <br />
                  <br />
                  <br />
                  <b>PPS Charging Technology</b>
                  <br />
                  <br />
                  Featuring Programmable Power Supply (PPS) charging technology,
                  this adapter is your ticket to extending your gadget's battery
                  life. Therefore, you can enjoy more usage time and less time
                  connected to a power source.
                  <br />
                  <br />
                  <br />
                  <b>Auto Detect Technology</b>
                  <br />
                  <br />
                  Thanks to auto-detect technology, this 30W adapter
                  automatically recognises your devices and delivers the optimal
                  power supply. It's like having a personalised charging
                  assistant that ensures your gadgets get the power they need
                  without a hitch.
                  <br />
                  <br />
                  <br />
                  <b>Extensive Compatibility</b>
                  <br />
                  <br />
                  This adapter supports almost all mobile phones, eliminating
                  compatibility concerns. So, whether you have an iPhone or a
                  Samsung or Pixel smartphone, this adapter can help power it
                  up.
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="border-1 p-2 bg-transparent border rounded  text-light">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-transparent mb-5 border rounded border-secondary p-3 mt-5 mb-5">
          <h2
            className="accordion-header bg-transparent border rounded border-0 pb-2  "
            id="headingOne"
          >
            <button
              className="accordion-button fs-4  text-light d-flex justify-content-"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span className="fw-bold fs-5">Reviews</span>
              <h2 className="pe-3 bg-transparent">
                <i className="fa-solid fa-caret-down" />
              </h2>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse show"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="Rating-box border border-secondary p-3 d-flex justify-content-between">
                <div className="overall-rating">
                  <h6>Overall Rating</h6>
                  <h5 className="text-success">
                    4.5 <i className="fa-solid fa-star" />
                  </h5>
                  <p>Based on 59 Ratings</p>
                </div>
                <div className="barAndStarFlex  ">
                  <div className="barAndStar d-flex align-items-center mt-1">
                    <div className="star-text text-decoration-underline text-success">
                      5 star
                    </div>
                    <div className="bar-container  border border-secondary ">
                      <div className="bar h-100 w-75 bg-success " />
                    </div>
                    <div className="star-text">47</div>
                  </div>
                  <div className="barAndStar d-flex align-items-center mt-1">
                    <div className="star-text text-decoration-underline text-success">
                      5 star
                    </div>
                    <div className="bar-container  border border-secondary ">
                      <div className="bar h-100 w-75 bg-success " />
                    </div>
                    <div className="star-text">47</div>
                  </div>
                  <div className="barAndStar d-flex align-items-center mt-1">
                    <div className="star-text text-decoration-underline text-success">
                      5 star
                    </div>
                    <div className="bar-container  border border-secondary ">
                      <div className="bar h-100 w-75 bg-success " />
                    </div>
                    <div className="star-text">47</div>
                  </div>
                  <div className="barAndStar d-flex align-items-center mt-1">
                    <div className="star-text text-decoration-underline text-success">
                      5 star
                    </div>
                    <div className="bar-container  border border-secondary ">
                      <div className="bar h-100 w-75 bg-success " />
                    </div>
                    <div className="star-text">47</div>
                  </div>
                  <div className="barAndStar d-flex align-items-center mt-1">
                    <div className="star-text text-decoration-underline text-success">
                      5 star
                    </div>
                    <div className="bar-container  border border-secondary ">
                      <div className="bar h-100 w-75 bg-success " />
                    </div>
                    <div className="star-text">47</div>
                  </div>
                </div>
              </div>
              <div className=" mt-4">
                <h6 className="fw-bold">Review this product</h6>
                <p>Help other customers make their decision</p>
                <button className="border rounded bg-transparent text-light fw-bold p-2 ps-5 pe-5">
                  Write a Review
                </button>
              </div>
              <hr />
              <div className>
                <p className=" fs-4">Customer Reviews:</p>
                <div className="cust-review ">
                  <div className="border rounded border-secondary p-2">
                    <span>
                      <i className="fa-solid fa-magnifying-glass" />
                    </span>{" "}
                    <input
                      className="bg-transparent border-0"
                      type="text"
                      placeholder=" Search reviews"
                    />
                  </div>
                  <div className="Sort">
                    <label htmlFor>Sort By</label>
                    <select
                      id="cars"
                      name="cars "
                      className="bg-transparent text-light p-1 border rounded"
                    >
                      <option value="Newest First" className="  text-light ">
                        Newest First
                      </option>
                      <option value="Highest Rated" className="  text-light  ">
                        Highest Rated
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className>
                <h3>Sneha ,Ghaziabad</h3>
                <span>Verified Puschase</span>
                <p>
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </p>
              </div>
              <div className="text-center mt-4">
                <button className="border-1 p-2 bg-transparent border rounded  text-light">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDescription;
