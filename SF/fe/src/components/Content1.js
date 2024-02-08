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

import logo from '../img/logo2.png';




import Commit1 from './Commit1';
import ResultCook from './ResultCook';
import ResultRandom from './ResultRandom';
import Expirationdate from './Expirationdate';
import Main from './Main';

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13];

function Content1() {
  const navigate = useNavigate();
  const [currentBgSlide, setCurrentBgSlide] = useState(0);


  useEffect(() => {
    const bgSlideInterval = setInterval(() => {
      setCurrentBgSlide(currentSlide => (currentSlide + 1) % bgImages.length);
    }, 5000);
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
      </Routes>
      </div>

       



  );
}

export default Content1;
