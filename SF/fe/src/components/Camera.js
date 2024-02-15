import { useEffect, useState } from "react"; // useState 추가
import "./css/camera.css";
import camimg from "../img/camera.png";
import axios from "axios";

function Camera() {
  const [streamActive, setStreamActive] = useState(false); // 스트림 상태 관리를 위한 state 추가

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
    if (sessionStorage.getItem("선택된재료") == null) {
      captureButton.onclick = function() {
        sessionStorage.setItem("리셋", "X");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.style.objectFit = 'contain';
        canvas.style.display = "flex";
        video.style.display = "none";
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(function(blob) {
          const formData = new FormData();
          formData.append("photo", blob);
          axios.post("http://localhost/camera",formData)
          .then(res => {
          sessionStorage.setItem("선택된재료", res.data);
          })
        });
      };
    }
    if (sessionStorage.getItem("리셋") === "O") {
      canvas.style.display = "none";
      video.style.display = "flex";
    }
  });

  return (
    <div className="cam_box_result">
      <div className="camera_header">
        식재료를 찍어보세요!
      </div>
      <div className="camera_content">
        <video
          autoplay="true"
          className="video"
          width="100%"
          height="100%"
        ></video>
        <canvas className="canvas"></canvas>
        <div className="captureButton">
          <img src={camimg} alt="camera" className="camimg"></img>
        </div>
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
      </div>
    </div>
  );
}

export default Camera;
