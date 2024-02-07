import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/Result.css';

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


const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13];
const contentImages = [
  { src: Food1, label: "랜덤 음식"},
];


function ResultCook() {
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
        <main className="contents">
          <div className='RandomFoodresult'>
            <div className="foodresipe">
              {contentImages.map((image, index) => (
                <div key={index} className="resultfood">
                  <img src={image.src} alt={`Food ${index + 1}`} />
                  <div className="food-label">{image.label}</div>
                </div>
              ))}
              <div className='Foodtag'>#여기엔 태그</div>
            </div>
            <div className="recipeDetails">
              <div className='ingredient'>요리 재료</div>
              <div className='CookResipe'>조리 방법 및 레시피</div>
            </div>
          </div>
        </main>
  );
}

export default ResultCook;
