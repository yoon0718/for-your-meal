import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './css/Content1.css';


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
import bg14 from '../img/food/14.jpg';
import bg15 from '../img/food/15.jpg';
import bg16 from '../img/food/16.jpg';
import bg17 from '../img/food/17.jpg';
import bg18 from '../img/food/18.jpg';
import bg19 from '../img/food/19.jpg';
import bg20 from '../img/food/20.jpg';
import bg21 from '../img/food/21.jpg';
import bg22 from '../img/food/22.jpg';
import bg23 from '../img/food/23.jpg';
import bg24 from '../img/food/24.jpg';
import bg25 from '../img/food/25.jpg';
import bg26 from '../img/food/26.jpg';
import bg27 from '../img/food/27.jpg';
import bg28 from '../img/food/28.jpg';
import bg29 from '../img/food/29.jpg';
import bg30 from '../img/food/30.jpg';
import bg31 from '../img/food/31.jpg';
import bg32 from '../img/food/32.jpg';

import logo from '../img/logo2.png';




import Commit1 from './Commit1';
import ResultCook from './ResultCook';
import ResultRandom from './ResultRandom';
import Expirationdate from './Expirationdate';
import Main from './Main';
import Commit2 from './Commit2';
import IngredientTest from './IngredientTest';

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15, bg16, bg17, bg18, bg19, bg20, bg21, bg22, bg23
  , bg24, bg25, bg26, bg27, bg28, bg29, bg30, bg31, bg32];

function Content1() {
  const navigate = useNavigate();
  const [currentBgSlide, setCurrentBgSlide] = useState(0);


  useEffect(() => {
    const bgSlideInterval = setInterval(() => {
      setCurrentBgSlide(currentSlide => (currentSlide + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(bgSlideInterval);
  }, []);

  const goToSelect = () => {
    navigate('/select'); // 여기서 '/select'는 select 페이지의 경로입니다. 실제 경로에 맞게 조정해주세요.
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
          {/* 새로운 버튼 추가 */}
          <button className="selectButton" onClick={goToSelect} style={{position: 'absolute', left: '20px', top: '20px'}}>홈으로 이동하기</button>
        </div>
      </header>

      <div className="slider">
        <div className="slider1">
          {bgImages.map((image, index) => (
            <img key={image} className={`imgslide ${currentBgSlide === index ? 'active' : ''}`} src={image} alt={`Background ${index + 1}`} />
          ))}
        </div>
      </div>
      <Routes>
        <Route path = "/" element={<Main/>}/>
        <Route path = "commit1" element={<Commit1/>}/>
        <Route path = "ResultCook" element={<ResultCook/>}/>
        <Route path = "ResultRandom" element={<ResultRandom/>}/>
        <Route path = "Expirationdate" element={<Expirationdate/>}/>
        <Route path = "commit2" element={<Commit2/>}/>
        <Route path = "addingre" element={<IngredientTest/>}/>
      </Routes>
      </div>

       



  );
}

export default Content1;
