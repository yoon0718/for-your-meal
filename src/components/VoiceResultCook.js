// ------------VoiceC 의 음성 인식 결과 레시피 부분입니다.------------

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/VoiceResultCook.css";
import axios from "axios";
import Mic from "../img/mic.png";
import fridge from "../img/fridge.png";

function VoiceResultCook() {
  const navigate = useNavigate();
  const emotion_dic = {
    "0": "화가 난",
    "1": "불쾌한",
    "2": "두려운",
    "3": "행복한",
    "4": "평상시의",
    "5": "슬픈"
  };

  const [emotion, setEmotion] = useState(false);
  const [food_image, setImage] = useState(false);
  const [food_name, setName] = useState(false);
  const [food_ingredient, setIngredient] = useState(false);
  const [food_recipe, setRecipe] = useState(false);
  const [food_tip, setTip] = useState(false);

  const handleReset = () => {
    window.location.reload();
  };

  const handleVoiceC = () => {
    const filename = sessionStorage.getItem("filename");
    const result = sessionStorage.getItem("result");
    axios
      .post(
        "http://localhost/emotionresult",
        { filename: filename, result: result },
        {
          params: { home: true }
        }
      )
      .then((res) => {
        sessionStorage.clear();
        window.location.href = "/Ai";
      });
  };

  const gohome = () => {
    const filename = sessionStorage.getItem("filename");
    const result = sessionStorage.getItem("result");
    axios
      .post(
        "http://localhost/emotionresult",
        { filename: filename, result: result },
        {
          params: { home: true }
        }
      )
      .then((res) => {
        sessionStorage.clear();
        window.location.href = "/select";
      });
  };
  const goToMain = () => {
    navigate("/main"); // 여기서 '/select'는 select 페이지의 경로입니다. 실제 경로에 맞게 조정해주세요.
  };
  useEffect(() => {
    const filename = sessionStorage.getItem("filename");
    const result = sessionStorage.getItem("result");
    if (result != null) {
      axios
        .post("http://localhost/emotionresult", {
          filename: filename,
          result: result
        })
        .then((res) => {
          setEmotion(emotion_dic[result]);
          setImage(res.data["이미지경로"]);
          setName(res.data["메뉴명"]);
          setIngredient(res.data["재료정보"]);
          setRecipe(res.data["만드는법"]);
          setTip(res.data["저감조리법tip"]);
        });
    } else {
      alert("비정상적인 접근이 감지되었습니다.");
      window.location.href = "/select";
    }
  }, []);

  if (food_recipe !== false) {
    return (
      <div className={`color-change-5x`}>
        <div className="resulthomebtn">
          <img src={fridge} className="go_homebtn" onClick={goToMain}></img>
        </div>
        <div className="resulthomebtn2">
          <img src={Mic} className="go_homebtn2" onClick={gohome}></img>
        </div>
        <main className="Voicecontents">
          <div className="Voicefoodresipe">
            <img src={food_image} alt={`Food ${food_name}`} />
            <div className="Voicefood-label">{food_name}</div>
          </div>
          <div className="VoicerecipeDetails">
            <div className="VoiceText">
              <div className="Voiceingredient1">
                당신은 오늘 {emotion} 상태이시군요!
              </div>
              <div className="Voiceingredient2">
                <p className="VoiceCookBold">요리 재료</p> <br />{" "}
                {food_ingredient}
              </div>
              <div className="VoiceCookResipe1">
                <p className="VoiceCookBold">조리 방법 및 레시피</p>
                <br />
                {food_recipe.split("||").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
                <br />
                저감조리법 tip : {food_tip}
              </div>
            </div>
            <div className="VoiceButtons">
              <button className="Voicebtn" onClick={handleReset}>
                다른 메뉴 보기
              </button>
              <button className="VoiceLoadingbtn" onClick={handleVoiceC}>
                감정 파악 다시 하기
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <main className="contents">
        <div className="RandomFoodresult">결과를 가져오는 중이에요!</div>
      </main>
    );
  }
}

export default VoiceResultCook;
