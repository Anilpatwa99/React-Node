import React from 'react'
import Card from './Card_Container'
import Card_Data from '../Data/Card_Data'



const Feature = () => {
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


  )
}

export default Feature
