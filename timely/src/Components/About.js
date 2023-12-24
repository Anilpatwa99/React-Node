import React from 'react'
import './About.css'
import Slider from "react-slick";
const About = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
