// ---------- 메인컨텐츠 부분의 맨 아래 컨텐츠 유통기한 임박 및 냉장고 보관재료 부분입니다.---------

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/MainExpirationdate.css';

import Food1 from '../img/food/찌개예시1.jpg';
import Atable from './Atable';
import Btable from './Btable';

const contentImages = [
  { src: Food1, label: "랜덤 음식"},
];


function MainExpirationdate() {
    const navigate = useNavigate(); // useNavigate를 호출하여 navigate 함수를 초기화합니다.
  

  return (    
      
        <main className="contents">
          <div className='ExpFoodresult'>
              <div className="Expfood-1">
                <Atable></Atable>
              </div>
              <div className="Expfood-2">
                <Btable></Btable>
              </div>
          </div>
        </main>
      
      
  );
}

export default MainExpirationdate;
