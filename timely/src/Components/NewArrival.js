import React from 'react'
import Card from './Card_Container'
import Card_Data from '../Data/Card_Data'

const NewArrival = () => {
  return (
      <section className="service pt-0 pb-5 mt-5" id="new_arrival">
  <div className="container">
    <div> <span className="product-label">New Arrivals </span></div>
    <div className="card-group ">
          {Card_Data.slice(6, 9).map((item, index) => (
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

export default NewArrival
