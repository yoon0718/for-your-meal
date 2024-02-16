// --------메인레시피컨텐츠 중 레시피의 맨 위 컨텐츠 결과 부분입니다.--------

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/css/MainCommit.css";
import axios from "axios";

function MainCommit1() {
  const navigate = useNavigate();
  const [food1, setFood1] = useState(false);
  const [food2, setFood2] = useState(false);
  const [food3, setFood3] = useState(false);
  const [food4, setFood4] = useState(false);
  const [food5, setFood5] = useState(false);
  const [food6, setFood6] = useState(false);

  useEffect(() => {
    const cousinetype = sessionStorage.getItem("요리종류");
    axios.post("http://10.10.21.89/fastsearch", cousinetype).then((res) => {
      setFood1(res.data["menu1"]);
      setFood2(res.data["menu2"]);
      setFood3(res.data["menu3"]);
      setFood4(res.data["menu4"]);
      setFood5(res.data["menu5"]);
      setFood6(res.data["menu6"]);
    });
  }, []);

  const contentImages = [
    { src: food1["이미지경로"], label: food1["메뉴명"] },
    { src: food2["이미지경로"], label: food2["메뉴명"] },
    { src: food3["이미지경로"], label: food3["메뉴명"] },
    { src: food4["이미지경로"], label: food4["메뉴명"] },
    { src: food5["이미지경로"], label: food5["메뉴명"] },
    { src: food6["이미지경로"], label: food6["메뉴명"] }
  ];

  const setName = (label) => {
    sessionStorage.setItem("메뉴명", label);
    navigate("/main/ResultCook");
  };

  return (
    <div className="CategoryFood">
      <div className="food-container">
        {contentImages.map((image, index) => (
          <div
            key={index}
            className="food-item"
            onClick={() => setName(image.label)}
          >
            <div className="food-item-img">
              <img src={image.src} alt={`Food ${index + 1}`} />
            </div>
            <div className="commit-food-label">{image.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCommit1;
