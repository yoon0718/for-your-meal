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

  if (food !== false) {

    const contentImages = [
      { src: food['이미지경로'], label: food['메뉴명'], ingredients: food['재료정보'], way: food['만드는법'], tip: food['저감조리법tip'], owningre: food['보유한재료']},
    ];
  
    var a = contentImages[0]['owningre']
    var b = contentImages[0]['ingredients']
    if (a.length >= 1) {
      for (var i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
          b = b.replace(new RegExp(a[i], 'gi'), `<span style=color:red>${a[i]}</span>`)
        }
      }
    }

    return (
      <div className='RandomFoodresult'>
        <div className="foodresipe">
          {contentImages.map((image, index) => (
            <div key={index} className="resultfood">
              <img src={image.src} alt={`Food ${index + 1}`} />
              <div className="food-label">{image.label}</div>
            </div>
          ))}
          {/* <div className='Foodtag'>#여기엔 태그</div> */}
        </div>
        <div className="recipeDetails">
          {contentImages.map((image, index) => (
          <div>
            {image.owningre.length !== 0 ?
            <div className='ingredient'>현재 보유한 재료는 {image.owningre.join(', ')} 입니다.</div>
            :null}
            <div><span className='ingredientTitle'>요리 재료</span></div>
            <div className='ingredient' dangerouslySetInnerHTML={{__html: b }}></div>
            <div className='CookResipe'><span className='ingredientTitle'>조리 방법 및 레시피</span><br/>{image.way.split('||').map((line, index) => <p key={index}>{line}</p>)}<br/>저감조리법 tip : {image.tip}</div>
          </div>
          ))}
        </div>
      </div>
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
