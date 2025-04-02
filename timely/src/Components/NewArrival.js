import React from "react";
import Card from "./Card_Container";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import Card_Data from '../Data/Card_Data'

const NewArrival = () => {
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
    <section className="service pt-0 pb-5 mt-5" id="new_arrival">
      <div className="container">
        <div>
          {" "}
          <span className="product-label">New Arrivals </span>
        </div>
        <div className="card-group ">
          {Card_Data.slice(6, 9).map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              newprice={item.NewPrice}
              oldprice={item.OldPrice}
              image={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
