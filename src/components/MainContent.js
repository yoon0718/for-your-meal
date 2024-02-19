// ------메인레시피 홈페이지 부분의 컨텐츠 부분입니다.------

import item1 from "../img/국&찌개.png";
import item2 from "../img/반찬.png";
import item3 from "../img/기타.png";
import item4 from "../img/밥.png";
import item5 from "../img/디저트.png";
import item6 from "../img/dish.png";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/MainContent.css";
import Content2 from "./MainChatbot";

import roulette1 from "../img/11/bibimbap.png";
import roulette2 from "../img/11/biryani.png";
import roulette3 from "../img/11/dinner.png";
import roulette4 from "../img/11/fast-food.png";
import roulette5 from "../img/11/lobster.png";
import roulette6 from "../img/11/pad-thai.png";
import roulette7 from "../img/11/pizza.png";
import roulette8 from "../img/11/salad.png";
import roulette9 from "../img/11/spaghetti.png";
import roulette10 from "../img/11/taco.png";
import roulette11 from "../img/11/thai-food.png";
import roulette12 from "../img/11/vegetable.png";

const contentImages = [
  { src: item4, path: "/main/commit1", label: "밥", name: "0" },
  { src: item1, path: "/main/commit1", label: "국&찌개", name: "2" },
  { src: item2, path: "/main/commit1", label: "반찬", name: "1" },
  { src: item6, path: "/main/commit1", label: "일품", name: "3" },
  { src: item5, path: "/main/commit1", label: "디저트", name: "4" },
  { src: item3, path: "/main/commit1", label: "기타", name: "5" }
];

const rouletteImages = [
  roulette1,
  roulette2,
  roulette3,
  roulette4,
  roulette5,
  roulette6,
  roulette7,
  roulette8,
  roulette9,
  roulette10,
  roulette11,
  roulette12
];

function MainContent() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("");
  const [rouletteActive, setRouletteActive] = useState(false);
  const [selectedRouletteImage, setSelectedRouletteImage] = useState(roulette1);
  const AddBtn = () => {
    navigate("/main/Add");
  };
  const setType = (label) => {
    sessionStorage.setItem("요리종류", label);
    navigate("/main/commit1");
  };

  const startRoulette = () => {
    setRouletteActive(true);
    const rouletteInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * rouletteImages.length);
      setSelectedRouletteImage(rouletteImages[randomIndex]); // 랜덤 이미지를 설정합니다.
    }, 100);

    setTimeout(() => {
      clearInterval(rouletteInterval);
      setRouletteActive(false);

      // 여기에서는 선택된 메뉴를 설정하고, ResultCook 페이지로 이동합니다.
      setSelectedMenu("메뉴가 선택되었습니다!");

      setTimeout(() => {
        navigate("/main/ResultRandom");
      }, 2000);
    }, 2000);
  };

  const goToExpirationdate = () => {
    navigate("/main/expirationdate"); // 여기서 '/expirationdate'는 Expirationdate.js 페이지의 경로입니다.
  };

  return (
    <div className="Mainsection">
      <main className="contents">
        <div className="contentsection">
          {contentImages.map((image, index) => (
            <div key={index} className="content-item">
              <Link
                to={image.path}
                className="image-link"
                onClick={() => setType(image.name)}
              >
                <img src={image.src} alt={`Content Image ${index}`} />
                <div className="image-label">{image.label}</div>
              </Link>
            </div>
          ))}
        </div>

        <section className="contentsection2">
          {!rouletteActive && !selectedMenu ? (
            <div className="Randomview">
              뭘 먹어야 할까? 랜덤 메뉴 추천기가 정해드려요!
              <button className="Menubar" onClick={startRoulette}>
                음식 추천
              </button>
            </div>
          ) : rouletteActive ? (
            <div className="Randomview-2">
              <img
                src={selectedRouletteImage}
                alt="Roulette"
                className="selected-roulette-image"
              />
            </div>
          ) : (
            <div className="Randomview-2">{selectedMenu}</div>
          )}
        </section>

        <section className="contentsection3" onClick={goToExpirationdate}>
          <div>보관된 식재료 & 유통기한 확인하기</div>
        </section>
      </main>
      <div className="slider2-right">
        <div className="slider-right1">
          <Content2 />
        </div>
        <div className="slider-right2" onClick={AddBtn}>
          냉장고에 식재료 넣기
        </div>
      </div>
    </div>
  );
}

export default MainContent;
