import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import item1 from '../img/taste.jpeg';
import item2 from '../img/category.jpeg';
import item3 from '../img/ingre.jpeg';
import item4 from '../img/serch.jpeg';

import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';

export default function Content2() {
  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (modalIndex) => {
    setModalOpen(modalIndex);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    arrows: false
  };

  return (
    <div className="content2">
      <Slider {...settings}>
        <div onClick={() => openModal(1)}>
          <img src={item1} alt="Taste" />
        </div>
        <div onClick={() => openModal(2)}>
          <img src={item2} alt="Category" />
        </div>
        <div onClick={() => openModal(3)}>
          <img src={item3} alt="Ingredients" />
        </div>
        <div onClick={() => openModal(4)}>
          <img src={item4} alt="Search" />
        </div>
      </Slider>

      {modalOpen === 1 && <Modal1 isOpen={true} closeModal={closeModal} />}
      {modalOpen === 2 && <Modal2 isOpen={true} closeModal={closeModal} />}
      {modalOpen === 3 && <Modal3 isOpen={true} closeModal={closeModal} />}
      {modalOpen === 4 && <Modal4 isOpen={true} closeModal={closeModal} />}
    </div>
  );
}
