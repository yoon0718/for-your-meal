import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/Expirationdate.css';

import Food1 from '../img/food/찌개예시1.jpg';
import Atable from './Atable';
import Btable from './Btable';

const contentImages = [
  { src: Food1, label: "랜덤 음식"},
];


function Expirationdate() {
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

export default Expirationdate;
