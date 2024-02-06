import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/Expirationdate.css';


import logo from '../img/logo.png';
import Food1 from '../img/food/찌개예시1.jpg';

const contentImages = [
  { src: Food1, label: "랜덤 음식"},
];


function Expirationdate() {
    const navigate = useNavigate(); // useNavigate를 호출하여 navigate 함수를 초기화합니다.
  

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
      
      <div className="Exp-slider">
        <div className="Exp-slider1">
         
        </div>

        <main className="contents">
          <div className='ExpFoodresult'>
            <div className="Expfood">
              
                <div className="Expfood-1">
                  
                </div>
            
            </div>
            <div className="recipeDetails">
              <div className='ingredient'>냉장고 상시재료</div>
              <div className='CookResipe'>음식</div>
            </div>
          </div>
        </main>
      </div>
      
    </div>
  );
}

export default Expirationdate;
