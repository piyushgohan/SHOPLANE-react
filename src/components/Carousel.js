import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Topbar.css';


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    lazyLoad: false,
  };
  return (
    <div className="carousel">
    <Slider {...settings} >
      <div>
        <h3><img src="https://shoplane.netlify.app/img/img1.png" className="image" alt="1" /></h3>
      </div>
      <div>
        <h3><img src="https://shoplane.netlify.app/img/img2.png" className="image" alt="2"/></h3>
      </div>
      <div>
        <h3><img src="https://shoplane.netlify.app/img/img3.png" className="image" alt="3" /></h3>
      </div>
      <div>
        <h3><img src="https://shoplane.netlify.app/img/img4.png" className="image" alt="4" /></h3>
      </div>
    </Slider>
      <div className="sideglow1"></div>
      <div className="sideglow2"></div>
    </div>
  );
}