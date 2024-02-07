import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../components/css/Commit.css';

import Food1 from '../img/food/찌개예시1.jpg';
import Food2 from '../img/food/찌개예시2.jpg';
import Food3 from '../img/food/찌개예시3.jpg';
import Food4 from '../img/food/찌개예시4.jpg';
import Food5 from '../img/food/찌개예시5.png';
import Food6 from '../img/food/찌개예시6.jpg';


const contentImages = [
  { src: Food1, label: "찌개 예시 1", path: "/" },
  { src: Food2, label: "찌개 예시 2", path: "/" },
  { src: Food3, label: "찌개 예시 3", path: "/" },
  { src: Food4, label: "찌개 예시 4", path: "/" },
  { src: Food5, label: "찌개 예시 5", path: "/" },
  { src: Food6, label: "찌개 예시 6", path: "/" },
];

function Commit1() {

  return (
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
  );
}

export default Commit1;
