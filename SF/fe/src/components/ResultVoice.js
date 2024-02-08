import React, { useState, useEffect } from 'react';

import './css/Result.css';
import axios from 'axios';

function ResultVoice() {
  const emotion_dic = {
    '0' : '화가 난',
    '1' : '불쾌한',
    '2' : '두려운',
    '3' : '행복한',
    '4' : '평상시의',
    '5' : '슬픈'
}

const [emotion,setEmotion] = useState(false);
const [food_image,setImage] = useState(false);
const [food_name,setName] = useState(false);
const [food_ingredient,setIngredient] = useState(false);
const [food_recipe,setRecipe] = useState(false);
const [food_tip,setTip] = useState(false);
useEffect(() => {
    const filename = sessionStorage.getItem("filename")
    const result = sessionStorage.getItem("result")
    if (result != null) {
        axios.post("http://localhost/emotionresult",{filename:filename, result:result})
        .then(res => {
            setEmotion(emotion_dic[result])
            setImage(res.data["이미지경로"])
            setName(res.data['메뉴명'])
            setIngredient(res.data['재료정보'])
            setRecipe(res.data['만드는법'])
            setTip(res.data['저감조리법tip'])
        })
    }
    else {
        alert("비정상적인 접근이 감지되었습니다.")
        window.location.href = "/"
    }
},[])

useEffect(() => {
  const reset_btn = document.querySelector('.btn')
  reset_btn.addEventListener("click",() => {
      window.location.reload();
  })
  const home_btn = document.querySelector('.home')
  const filename = sessionStorage.getItem("filename")
  const result = sessionStorage.getItem("result")
  home_btn.addEventListener("click", () => {
      axios.post('http://localhost/emotionresult', {filename:filename, result:result}, {
          params: { home: true }
      })
      .then(res => {
          sessionStorage.clear()
          window.location.href = '/'
      })
  })
},[])
  return (
        <main className="contents">
          <div className='RandomFoodresult'>
            <div className="foodresipe">
              
                <div className="resultfood">
                  <img src={food_image} alt={`Food ${food_name}`} />
                  <div className="food-label">{food_name}</div>
                </div>

              <div className='Foodtag'>#여기엔 태그</div>
            </div>
            <div className="recipeDetails">
              <div>
                <div className='ingredient'>당신은 오늘 {emotion} 상태이시군요!</div>
                <div className='ingredient'>요리 재료 <br/> {food_ingredient}</div>
                <div className='CookResipe'>조리 방법 및 레시피<br/>{food_recipe}<br/>저감조리법 tip : {food_tip}</div>
              </div>
              <div>
                <button className="btn">다시 선택</button>
              </div>
              <div>
                <button className='home' type='submit'>홈으로</button>
              </div>
            </div>
          </div>
        </main>
  );
}

export default ResultVoice;
