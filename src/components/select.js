import React, { useState } from 'react';

import './css/select.css';
import Mic from '../img/mic.png';
import fridge from '../img/fridge.png';

function Select() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  const PlzClick = () => {
    window.location.href = '/main';
  };
  const AiClick = () => {
    window.location.href = '/Ai';
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <div className="sign-in-form">
            <h2 className="title">
              냉장고를 <br></br> 부탁해
            </h2>
            <p className="social-text">본격 냉장고 털이범 되기 프로젝트</p>
            <button className="btn plz" onClick={PlzClick}>
              부탁하러 가기
            </button>
          </div>
        </div>
        <div className="signup-signup">
          <div className="sign-up-form">
            <h2 className="title">
              음성으로 <br></br>음식추천
            </h2>
            <p className="social-text">지금 나의 기분에 맞는 음식을 찾아보앙~</p>
            <button className="btn" onClick={AiClick}>
              말하러 가기
            </button>
          </div>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>다른기능 사용해보기</h3>

            <button className="btn trans" onClick={handleSignUpClick}>
              변신
            </button>
          </div>
          <img src={fridge} alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>다른기능 사용해보기</h3>

            <button className="btn trans" onClick={handleSignInClick}>
              변신
            </button>
          </div>
          <img src={Mic} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Select;
