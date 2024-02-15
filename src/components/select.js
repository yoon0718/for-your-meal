import React, { useState } from "react";

import "./css/select.css";
import Mic from "../img/mic.png";
import fridge from "../img/fridge.png";

function Select() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  const PlzClick = () => {
    window.location.href = "/main";
  };
  const AiClick = () => {
    window.location.href = "/Ai";
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <div className="sign-in-form">
            <h2 className="title">
              <span className="highlight">오</span>늘은<br></br>
              <span className="highlight">내</span>가<br></br>
              <span className="highlight">요</span>리사
              <br />
            </h2>
            <p className="social-text">냉장고 속 남는 재료 털기 어떠세요?</p>
            <button className="btn plz" onClick={PlzClick}>
              시작
            </button>
          </div>
        </div>
        <div className="signup-signup">
          <div className="sign-up-form">
            <h2 className="title">
              <span className="highlight2">지</span>금<br></br>
              <span className="highlight2">이</span>런음식<br></br>
              <span className="highlight2">어</span>떤가요?<br></br>
            </h2>
            <p className="social-text">
              당신의 기분에 맞춰서 음식을 추천해 드립니다.
            </p>
            <button className="btn" onClick={AiClick}>
              말하러 가기
            </button>
          </div>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="recommendation-text">
              목소리로 <br></br>
              <span className="text_space"></span>
              음식 <br></br>
              <span className="text_space"></span>
              추천받으러 가기
            </h3>

            <button className="btn trans" onClick={handleSignUpClick}>
              음성 인식
            </button>
          </div>
          <img src={Mic} alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3 className="recommendation-text">
              레시피로 <br></br>
              <span className="text_space"></span>
              음식 <br></br>
              <span className="text_space"></span>
              추천받으러 가기
            </h3>

            <button className="btn trans" onClick={handleSignInClick}>
              레시피 추천
            </button>
          </div>
          <img src={fridge} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Select;
