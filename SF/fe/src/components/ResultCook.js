import React, { useState, useEffect } from 'react';

import './css/Result.css';
import axios from 'axios';



function ResultCook() {
  const [food, setFood] = useState(false);
  
  useEffect(() => {
    const menu_name = sessionStorage.getItem("메뉴명")
    axios.post("http://localhost/fastresult",{"메뉴명":menu_name})
    .then(res => {
      setFood(res.data)
    })
  },[])
  
  const contentImages = [
    { src: food['이미지경로'], label: food['메뉴명'], ingredients: food['재료정보'], way: food['만드는법'], tip: food['저감조리법tip']},
  ];
  if (food !== false) {
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
              <div className='ingredient'>요리 재료 <br/> {image.ingredients}</div>
              <div className='CookResipe'>조리 방법 및 레시피<br/>{image.way.split('||').map((line, index) => <p key={index}>{line}</p>)}</div>
            </div>
            ))}
          </div>
        </div>
      </main>
);
  } else {
    return (
      <main className="contents">
        <div className='CookResipe'>
          결과를 가져오는 중이에요!
        </div>
      </main>
    )
  }
  
}

export default ResultCook;
