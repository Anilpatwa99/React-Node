import React from "react";
import Card from "./Card_Container";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import Card_Data from "../Data/Card_Data";

const Feature = () => {
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
    <section className="service pt-0 pb-5 mt-5  " id="feature">
      <div className="container">
        <div className="product-label">Feature Watches</div>
        <div className="card-group ">
          {Card_Data.slice(3, 6).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              newprice={item.newprice}
              oldprice={item.OldPrice}
              image={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
