import { useEffect } from 'react';
import './css/camera.css'
import camimg from '../img/camera.png'
import axios from 'axios';

function Camera() {
  useEffect(() => {
    const video = document.querySelector('.video');
    const canvas = document.querySelector('.canvas');
    const captureButton = document.querySelector('.captureButton');

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

    captureButton.onclick = function() {
      canvas.width = video.width;
      canvas.height = video.height;
      canvas.style.display = "flex";
      video.style.display = "none";
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(function(blob) { 
        const formData = new FormData();
        formData.append('photo', blob);
        axios.post("http://10.10.21.89/camera",formData)
        .then(res => {
          console.log(res.data)
        })
      })
    };
  },[]);

  return (
    <div className="cam_box_result">
      <div className="camera_header">
        식재료를 찍어보세요!
      </div>
      <div className='camera_content'>
        <video autoplay="true" className="video" width="426px" height="320px"></video>
        <canvas className="canvas"></canvas>
        <div className="captureButton"><img src={camimg} alt='camera' className='camimg'></img></div>
      </div>
    </div>
  );
}

export default Camera;
