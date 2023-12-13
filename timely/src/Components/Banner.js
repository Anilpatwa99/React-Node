import React from 'react'
import Slider from "react-slick";
import './Banner.css'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    arrow: true
   

  };
  return (
    <div className='container'>
      <Slider {...settings}>
        <div className='banner-img'>
          <img className='img1' src="https://luxurywatchbuyer.com/wp-content/uploads/2015/04/banner-2.png" alt="" />
        </div>
        <div className='banner-img'>
          <img className='img1' src="https://luxurywatchbuyer.com/wp-content/uploads/2015/04/banner-1.png" alt="" />
        </div>
        <div className='banner-img'>
          <img className='img1' src="https://thegoldmarket.co.uk/wp-content/uploads/2016/12/1920x700-rolex-banner-jon-2-1.jpg" alt="" />
        </div>
        <div  className='banner-img'>
          <img className='img1' src="https://www.goldcoastgoldbuyers.com.au/wp-content/uploads/2014/11/buy_watches_banner.png" alt="" />
        </div>
        <div className='banner-img'>
          <img className='img1' src="https://thegoldmarket.co.uk/wp-content/uploads/2017/02/rolex-banner-1.jpg" alt="" />
        </div>
        <div className='banner-img'>
          <img className='img1' src="https://i.pinimg.com/originals/6b/7c/e6/6b7ce6f8385bea8c9ed611a894cfc211.jpg" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Banner
