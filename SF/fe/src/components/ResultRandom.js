import React, { useState, useEffect } from 'react';

import './css/Result.css';

import axios from 'axios';



function ResultRandom() {
  const [food, setFood] = useState(false);
  
  useEffect(() => {
    axios.post("http://localhost/randommenu")
    .then(res => {
      setFood(res.data)
    })
  },[])
  
  const contentImages = [
    { src: food['이미지경로'], label: food['메뉴명'], ingredients: food['재료정보'], way: food['만드는법'], tip: food['저감조리법tip']},
  ];

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
              {contentImages.map((image, index) => (
              <div>
                <div className='ingredient'>선택된 재료는 {food["선택된재료"]} 입니다.</div>
                <div className='ingredient'>요리 재료 <br/> {image.ingredients}</div>
                <div className='CookResipe'>조리 방법 및 레시피<br/>{image.way}<br/>저감조리법 tip : {image.tip}</div>
              </div>
              ))}
            </div>
          </div>
        </main>
  );
}

export default ResultRandom;
