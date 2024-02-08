import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bg1 from '../img/food/1.jpg';
import bg2 from '../img/food/2.jpg';
import bg3 from '../img/food/3.jpg';
import bg4 from '../img/food/4.jpg';
import bg5 from '../img/food/5.jpg';
import bg6 from '../img/food/6.jpg';
import bg7 from '../img/food/7.jpg';
import bg8 from '../img/food/8.jpg';
import bg9 from '../img/food/9.jpg';
import bg10 from '../img/food/10.jpg';
import bg11 from '../img/food/11.jpg';
import bg12 from '../img/food/12.jpg';

export default function Content1(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
    fade: true
  };

  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];
  const { className, style } = props;

  const containerStyle = {
    width: '100%',

    ...style
  };

  return (
    <div className={className} style={containerStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="custom-slide">
            <img src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
