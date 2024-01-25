import React, { useEffect, useState } from "react";
import "./Product.css";
import Card from "./Card_Container";
import axios from "axios";
import { Link } from "react-router-dom";
// import Card_Data from '../Data/Card_Data'

const Product = () => {
  const [Card_Data, setCard_Data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/products/allproducts"
        );
        const data = response.data;
        setCard_Data(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);
  console.log(Card_Data);

  return (
    <section className="service pt-0 pb-5 " id="product">
      <div className="container">
        <div className="product-label">Top Sale Watches</div>
        <div className="card-group ">
          {Card_Data.slice(0, 3).map((item) => (
            <Link to={`/productdes/${item.id}`}>
              <Card
                key={item.id}
                title={item.title}
                newprice={item.newprice}
                oldprice={item.OldPrice}
                image={item.imageUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
