import { useEffect, useState } from "react"; // useState 추가
import "./css/camera.css";
import camimg from "../img/camera.png";
import axios from "axios";

function Camera() {
  const [streamActive, setStreamActive] = useState(false); // 스트림 상태 관리를 위한 state 추가

  const data_class_name = {
    apple: "사과",
    asparagus: "아스파라거스",
    banana: "바나나",
    beans: "콩",
    beansprouts: "숙주",
    beetroot: "비트",
    broccoli: "브로콜리",
    cabbage: "양배추",
    capsicum: "고추",
    carrot: "당근",
    cauliflower: "콜리플라워",
    chicken: "닭",
    corn: "옥수수",
    cucumber: "오이",
    egg: "달걀",
    eggplant: "가지",
    ginger: "생강",
    grapes: "포도",
    kiwi: "키위",
    lemon: "레몬",
    lettuce: "상추",
    mango: "망고",
    onion: "양파",
    orange: "오렌지",
    paprika: "파프리카",
    pineapple: "파인애플",
    pomegranate: "석류",
    pork: "돼지고기",
    potato: "당근",
    pumpkin: "호박",
    raddish: "무",
    salmon: "당근",
    spinach: "시금치",
    sweetpotato: "고구마",
    tofu: "두부",
    tomato: "토마토",
    watermelon: "수박"
  };

  useEffect(() => {
    const video = document.querySelector(".video");
    if (navigator.mediaDevices.getUserMedia && streamActive) {
      // streamActive 조건 추가
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
          video.srcObject = stream;
        })
        .catch(function(err) {
          console.log("Something went wrong!", err);
        });
    } else if (video.srcObject && !streamActive) {
      // 스트림 비활성화 시 로직 추가
      video.srcObject.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    }
  }, [streamActive]); // streamActive 의존성 추가

  useEffect(() => {
    const video = document.querySelector(".video");
    const canvas = document.querySelector(".canvas");
    const captureButton = document.querySelector(".captureButton");
    const camimgElement = document.querySelector(".camimg");

    if (sessionStorage.getItem("선택된재료") == null) {
      captureButton.onclick = function() {
        sessionStorage.setItem("리셋", "X");
        camimgElement.style.display = "none";
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.style.objectFit = "contain";
        canvas.style.display = "flex";
        video.style.display = "none";
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(function(blob) {
          const formData = new FormData();
          formData.append("photo", blob);
          axios.post("http://localhost/camera", formData).then((res) => {
            sessionStorage.setItem("선택된재료", data_class_name[res.data]);
          });
        });
      };
    }
    if (sessionStorage.getItem("리셋") === "O") {
      canvas.style.display = "none";
      video.style.display = "flex";
      camimgElement.style.display = "flex";
    }
  });

  return (
    <div className="cam_box_result">
      <div className="camera_header">식재료를 찍어보세요!</div>

      <div className="camerabtn">
        <fieldset id="switch" className="radio">
          <input
            name="switch"
            id="on"
            type="radio"
            onChange={() => setStreamActive(true)}
            checked={streamActive === true}
          />
          <label htmlFor="on">ON</label>
          <input
            name="switch"
            id="off"
            type="radio"
            onChange={() => setStreamActive(false)}
            checked={streamActive === false}
          />
          <label htmlFor="off">OFF</label>
        </fieldset>
      </div>
      <div className="camera_content">
        <video
          autoplay="true"
          className="video"
          width="100%"
          height="100%"
        ></video>
        <canvas className="canvas"></canvas>
        <div
          className="captureButton"
          style={{ display: streamActive ? "flex" : "none" }}
        >
          <img src={camimg} alt="camera" className="camimg"></img>
        </div>
      </div>
    </div>
  );
}

export default Camera;
