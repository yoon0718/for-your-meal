// ------MainContent부분의 랜덤 메뉴 추천해줘 부분 입니다.------

import React, { useState, useEffect } from "react";

import "./css/Result.css";

import axios from "axios";

function MainResultRandom() {
  const [food, setFood] = useState(null);

  useEffect(() => {
    axios.post("http://localhost/randommenu").then((res) => {
      setFood(res.data);
    });
  }, []);
  if (food === "") {
    return (
      <div className="RandomFoodresult">
        <div className="foodresipe">
          냉장고에 아무 재료가 없어요! 재료를 추가해보시는건 어떤가요?
        </div>
      </div>
    );
  } else if (food !== null) {
    const contentImages = [
      {
        src: food["이미지경로"],
        label: food["메뉴명"],
        ingredients: food["재료정보"],
        way: food["만드는법"],
        tip: food["저감조리법tip"]
      }
    ];
    return (
      <div className="RandomFoodresult">
        <div className="foodresipe">
          {contentImages.map((image, index) => (
            <div key={index} className="resultfood">
              <img src={image.src} alt={`Food ${index + 1}`} />
              <div className="food-label">{image.label}</div>
            </div>
          ))}
        </div>
        <div className="recipeDetails">
          {contentImages.map((image, index) => (
            <div>
              <div className="ingredient">
                선택된 재료는{" "}
                <span className="ingredientTitle">{food["선택된재료"]}</span>{" "}
                입니다.
              </div>
              <div className="ingredient">
                <span className="ingredientTitle">요리 재료</span> <br />{" "}
                {image.ingredients}
              </div>
              <div className="CookResipe">
                <span className="ingredientTitle">조리 방법 및 레시피</span>
                <br />
                {image.way.split("||").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
                <br />
                저감조리법 tip : {image.tip}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <main className="contents">
        <div className="CookResipe">결과를 가져오는 중이에요!</div>
      </main>
    );
  }
}

export default MainResultRandom;
