import React from 'react'
import './About.css'
const About = () => {
  return (
      <section className="layout_padding " id="about">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex about-main">
          <div className=" p-3 about-image1">
            <img src="./images/a-1.jpg" alt />
            <div className="about" />
          </div>
          <div className="p-3 about-image2">
            <div className="about" />
            <img src="./images/a-2.jpg" alt />
          </div>
        </div>
      </div>
      <div className="col-md-6 " id="about">
        <h3 className="fs-1 ">About Our Shop</h3>
        <p className="mt-4 text-dark ">
          There are many variations of passages of Lorem Ipsum
          There are many variations <br />of
          passages of Lorem Ipsum
        </p>
        <button className="btn mt-4  text-light ">Read more</button>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
