import { useEffect } from 'react';
import './css/camera.css'
import camimg from '../img/camera.png'
import axios from 'axios';

function Camera() {
  useEffect(() => {
    const video = document.querySelector('.video');
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
          video.srcObject = stream;
        })
        .catch(function(err) {
          console.log('Something went wrong!', err);
        });
    }
  },[]);
    useEffect(() => {
      const video = document.querySelector('.video');
      const canvas = document.querySelector('.canvas');
      const captureButton = document.querySelector('.captureButton');
      if (sessionStorage.getItem("선택된재료") == null) {
        captureButton.onclick = function() {
          sessionStorage.setItem("리셋","X")
          canvas.width = video.width;
          canvas.height = video.height;
          canvas.style.display = "flex";
          video.style.display = "none";
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(function(blob) { 
            const formData = new FormData();
            formData.append('photo', blob);
            // axios.post("http://localhost/camera",formData)
            // .then(res => {
              sessionStorage.setItem("선택된재료","가지")
            // })
          })
        };
      }
      if (sessionStorage.getItem("리셋") === "O") {
        canvas.style.display = "none";
        video.style.display = "flex";
      }
    })

  return (
    <div className="cam_box_result">
      <div className="camera_header">
        식재료를 찍어보세요!
      </div>
      <div className='camera_content'>
        <video autoplay="true" className="video" width='640px' height='480px'></video>
        <canvas className="canvas"></canvas>
        <div className="captureButton"><img src={camimg} alt='camera' className='camimg'></img></div>
      </div>
    </div>
  );
}

export default Camera;
