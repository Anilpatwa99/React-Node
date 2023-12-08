import React from 'react'
import './Product.css'
import Card from './Card_Container'
import Card_Data from '../Data/Card_Data'

const Product = () => {
  return (

    <section className="service pt-0 pb-5 " id="product">
      <div className="container">
        <div className="product-label">Top Sale Watches</div>
        <div className="card-group ">
        {Card_Data.slice(0,3).map((item , index) => (
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

  )
}

export default Product
