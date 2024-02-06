import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Content1.css';
import { Link } from 'react-router-dom';

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

import item1 from '../img/국&찌개.png';
import item2 from '../img/반찬.png';
import item3 from '../img/기타.png';
import item4 from '../img/밥.png';
import item5 from '../img/디저트.png';
import item6 from '../img/면.png';

import roulette1 from '../img/11/bibimbap.png';
import roulette2 from '../img/11/biryani.png';
import roulette3 from '../img/11/dinner.png';
import roulette4 from '../img/11/fast-food.png';
import roulette5 from '../img/11/lobster.png';
import roulette6 from '../img/11/pad-thai.png';
import roulette7 from '../img/11/pizza.png';
import roulette8 from '../img/11/salad.png';
import roulette9 from '../img/11/spaghetti.png';
import roulette10 from '../img/11/taco.png';
import roulette11 from '../img/11/thai-food.png';
import roulette12 from '../img/11/vegetable.png';

import refrigerator from '../img/냉장고내부.png';

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13];
const contentImages = [
  { src: item1, path: "/commit1", label: "국&찌개" },
  { src: item2, path: "/commit2", label: "반찬" },
  { src: item3, path: "/commit3", label: "기타" },
  { src: item4, path: "/commit4", label: "밥" },
  { src: item5, path: "/commit5", label: "디저트" },
  { src: item6, path: "/commit6", label: "면" },
];

const rouletteImages = [roulette1, roulette2, roulette3, roulette4, roulette5, roulette6, roulette7, roulette8, roulette9, roulette10, roulette11, roulette12];


function Content1() {
  const navigate = useNavigate();
  const [currentBgSlide, setCurrentBgSlide] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [rouletteActive, setRouletteActive] = useState(false);
  // selectedRouletteImage 상태와 상태 설정 함수를 추가합니다.
  const [selectedRouletteImage, setSelectedRouletteImage] = useState(roulette1);

  useEffect(() => {
    const bgSlideInterval = setInterval(() => {
      setCurrentBgSlide(currentSlide => (currentSlide + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(bgSlideInterval);
  }, []);

  const startRoulette = () => {
    setRouletteActive(true);
    const rouletteInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * rouletteImages.length);
      setSelectedRouletteImage(rouletteImages[randomIndex]); // 랜덤 이미지를 설정합니다.
    }, 100);

    setTimeout(() => {
      clearInterval(rouletteInterval);
      setRouletteActive(false);

      // 여기에서는 선택된 메뉴를 설정하고, ResultCook 페이지로 이동합니다.
      const finalIndex = Math.floor(Math.random() * contentImages.length);
      setSelectedMenu(contentImages[finalIndex].label);

      setTimeout(() => {
        navigate('/resultcook');
      }, 2000);
    }, 2000);
  };

  const goToExpirationdate = () => {
    navigate('/expirationdate'); // 여기서 '/expirationdate'는 Expirationdate.js 페이지의 경로입니다.
  };

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

      <div className="slider">
        <div className="slider1">
          {bgImages.map((image, index) => (
            <img key={image} className={`imgslide ${currentBgSlide === index ? 'active' : ''}`} src={image} alt={`Background ${index + 1}`} />
          ))}
        </div>

        <main className="contents">
          <div className="contentsection">
            {contentImages.map((image, index) => (
              <div key={index} className="content-item">
                <Link to={image.path} className="image-link">
                  <img src={image.src} alt={`Content Image ${index + 1}`} />
                  <div className="image-label">{image.label}</div>
                </Link>
              </div>
            ))}
          </div>

          <section className="contentsection2">
            {!rouletteActive && !selectedMenu ? (
              <div className='Randomview'>
                뭘 먹어야 할까? 랜덤 메뉴 추천기가 정해드려요!<br/><br/>'메뉴를 추천해줘!'를 눌러보세요.
              </div>
            ) : rouletteActive ? (
              <div className='Randomview-2'>
                <img src={selectedRouletteImage} alt="Roulette" className="selected-roulette-image" />
              </div>
            ) : (
              <div className='Randomview-2'>추천 메뉴: {selectedMenu}</div>
            )}
          </section>
          <button className='Menubar' onClick={startRoulette}>메뉴를 추천해줘!</button>

          <section className="contentsection3">
            <div >
            냉장고에 있는 오래된 음식 알림 받으러 가기<br/>
            <button className='Expirationbtn' onClick={goToExpirationdate}>Go!</button>
          </div>
      </section>
          
        </main>

        <div className="slider2-right">
          <div className="slider-right1">카테고리별 챗봇 검색 부분</div>
          <div className="slider-right2">재료별 유통기한</div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
