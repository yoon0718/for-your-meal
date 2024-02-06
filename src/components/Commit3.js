import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../components/css/Commit.css';

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
import bg13 from '../img/food/13.jpg';

import logo from '../img/logo.png';
import Food1 from '../img/food/찌개예시1.jpg';
import Food2 from '../img/food/찌개예시2.jpg';
import Food3 from '../img/food/찌개예시3.jpg';
import Food4 from '../img/food/찌개예시4.jpg';
import Food5 from '../img/food/찌개예시5.png';
import Food6 from '../img/food/찌개예시6.jpg';


const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13];
const contentImages = [
  { src: Food1, label: "기타 예시 1", path: "/" },
  { src: Food2, label: "기타 예시 2", path: "/" },
  { src: Food3, label: "기타 예시 3", path: "/" },
  { src: Food4, label: "기타 예시 4", path: "/" },
  { src: Food5, label: "기타 예시 5", path: "/" },
  { src: Food6, label: "기타 예시 6", path: "/" },
];


function Commit3() {
  const navigate = useNavigate(); // useNavigate를 호출하여 navigate 함수를 초기화합니다.
  const [currentBgSlide, setCurrentBgSlide] = useState(0);

  const nextSlide = () => {
    setCurrentBgSlide(currentSlide => (currentSlide + 1) % bgImages.length);
  };

  useEffect(() => {
    const bgSlideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // 5초마다 슬라이드 전환

    return () => clearInterval(bgSlideInterval);
  }, []);

  return (
    <div className="wrap">
      <header className="header">
        <div className="header_container">
          <h1 className="logo">
            <img className="mainLogo" src={logo} alt="Logo" onClick={() => navigate('/main')} />
            <div className='logotitle' onClick={() => navigate('/main')}>
              <span className="logoMain">M:ILK</span><br/>
              <span className="logoSub">for your meal</span>
            </div>
          </h1>
        </div>
      </header>

      <div className="Commit-slider">
        <div className="Commit-slider1">
          {bgImages.map((image, index) => (
            <img
              key={image}
              className={`imgslide ${currentBgSlide === index ? 'active' : ''}`}
              src={image}
              alt={`Background ${index + 1}`}
            />
          ))}
        </div>

        <main className="contents">
          <div className='CategoryFood'>
            <div className="food-container">
              {contentImages.map((image, index) => (
                <div key={index} className="food-item">
                  <img src={image.src} alt={`Food ${index + 1}`} />
                  <div className="food-label">{image.label}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Commit3;
