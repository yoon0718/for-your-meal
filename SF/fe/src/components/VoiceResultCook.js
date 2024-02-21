// ------------VoiceC 의 음성 인식 결과 레시피 부분입니다.------------

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/VoiceResultCook.css";
import axios from "axios";
import Modal from 'react-modal';
import Mic from "../img/home.png";
import fridge from "../img/fridge.png";
import yogiyo from "../img/yogiyo.png"
import dadam from "../img/dadam.png"

Modal.setAppElement('#root');


function VoiceResultCook() {
  const navigate = useNavigate();
  const emotion_dic = {
    "0": "화가 나셨군요. 맛있는 음식으로 기분을 풀어보는건 어떨까요?",
    "1": "불쾌하시군요. 이 음식을 만들다 보면 기분이 좋아 질 수 있어요.",
    "2": "두려우신가요? 이 음식을 만들어 보면 마음이 편해 질 수 있답니다.",
    "3": "행복하신 날이네요! 이 음식을 만들어 더 행복한 하루를 보내보세요.",
    "4": "평상시처럼 편안한 날이네요. 이 음식을 만들어보는건 어떨까요?",
    "5": "슬픈일이 있었나요? 음식먹구 기분을 달래봐요."
  };
  const emotionTips = {
    "0": "화가 났을 때는 집중력을 높이는 활동을 해보세요. 요리를 하거나 책을 읽는 것이 좋습니다.",
    "1": "불쾌한 기분일 때는 편안한 음악을 들으며 명상을 해보세요.",
    "2": "두려울 때는 따뜻한 차를 마시며 휴식을 취하는 것이 좋습니다.",
    "3": "행복한 날에는 즐거운 노래를 들으며 춤을 춰보세요.",
    "4": "평상시에는 산책을 하거나 운동을 하는 것이 좋습니다.",
    "5": "슬플 때는 좋아하는 영화를 보거나 친구와 대화하는 것이 좋습니다."
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [emotion, setEmotion] = useState(false);
  const [food_image, setImage] = useState(false);
  const [food_name, setName] = useState(false);
  const [food_ingredient, setIngredient] = useState(false);
  const [food_recipe, setRecipe] = useState(false);
  const [food_tip, setTip] = useState(false);
  const [my_ingre, setMyIngre] = useState(false);

  const handleReset = () => {
    window.location.reload();
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleVoiceC = () => {
    const filename = sessionStorage.getItem("filename");
    const result = sessionStorage.getItem("result");
    axios
      .post(
        "http://10.10.21.89/emotionresult",
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
        "http://10.10.21.89/emotionresult",
        { filename: filename, result: result },
        {
          params: { home: true }
        }
      )
      .then((res) => {
        sessionStorage.clear();
        navigate("/select");
      });
  };
  const goToMain = () => {
    const filename = sessionStorage.getItem("filename");
    const result = sessionStorage.getItem("result");
    axios
      .post(
        "http://10.10.21.89/emotionresult",
        { filename: filename, result: result },
        {
          params: { home: true }
        }
      )
      .then((res) => {
        sessionStorage.clear();
        navigate("/main");
      });
  };

  const goToyogiyo = () => {
    window.open("https://www.yogiyo.co.kr/mobile/#/", '_blank');
  }
  const godadam = () => {
    window.open("https://www.dadammall.co.kr/View/Main/Main", '_blank');
  }

  useEffect(() => {
    const filename = sessionStorage.getItem("filename");
    const result = sessionStorage.getItem("result");
    if (result != null) {
      axios
        .post("http://10.10.21.89/emotionresult", {
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
          setMyIngre(res.data["보유한재료"])
        });
    } else {
      alert("비정상적인 접근이 감지되었습니다.");
      window.location.href = "/select";
    }
  }, []);

  if (food_ingredient !== false) {
    var a = my_ingre
    var b = food_ingredient
    if (a.length >= 1) {
      for (var i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
          b = b.replace(new RegExp(a[i], 'gi'), `<span style=color:red>${a[i]}</span>`)
        }
      }
    }
  }

  if (food_recipe !== false) {
    return (
      <div className={`color-change-5x`}>
        <div className="voice_buttons">
          <div className="voice_btn">
            <div className="resulthomebtn">
              <img src={dadam} className="go_homebtn4" onClick={godadam}></img>
            </div>
            <div className="resulthomebtn">
              <img src={yogiyo} className="go_homebtn3" onClick={goToyogiyo}></img>
            </div>
            <div className="resulthomebtn">
              <img src={fridge} className="go_homebtn" onClick={goToMain}></img>
            </div>
            <div className="resulthomebtn">
              <img src={Mic} className="go_homebtn2" onClick={gohome}></img>
            </div>
          </div>
          
          
        </div>
        <main className="Voicecontents">
          <div className="Voicefoodresipe">
            <img src={process.env.PUBLIC_URL + "/images/"+food_image} alt={`Food ${food_name}`} />
            <div className="Voicefood-label">{food_name}</div>
          </div>
          <div className="VoicerecipeDetails">
            <div className="VoiceText">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Emotion Tips"
            >
              <h2>{emotion}</h2>
              <p>{emotionTips[emotion]}</p>
              <button onClick={closeModal}>닫기</button>
            </Modal>
              <div className="Voiceingredient1">
                {emotion}
              </div>
              
              <div className="Voiceingredient2">
                {my_ingre.length !== 0 ?
                <div>
                <div>냉장고에 있는 식재료 : {my_ingre.join(', ')}</div>
                <br/>
                </div>:null
                }
                <p className="VoiceCookBold">요리 재료</p> <br />{" "}
                <div dangerouslySetInnerHTML={{__html: b }}></div>
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
