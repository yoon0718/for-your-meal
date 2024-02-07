import axios from "axios";
import { useEffect } from "react";

function Camera() {
    useEffect(() => {
        const video = document.querySelector(".video");
    const canvas = document.querySelector(".canvas");
    const captureButton = document.querySelector(".captureButton");
    
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
    }

    captureButton.onclick = function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataURL = canvas.toDataURL('image/jpg');

        const byteString = atob(imageDataURL.split(',')[1]);
        const mimeString = imageDataURL.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        const formData = new FormData();
        formData.append('photo',blob);

        try {
        axios.post("http://localhost/camera",formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then(res => {
            sessionStorage.setItem("photoname",res.data)
        });
    } catch (error) {
        console.error('Error uploading photo:', error)
    }
    };
    })
    
  return (
    <div className="container">
            <video autoPlay={true} className="video"></video>
            <canvas className="canvas"></canvas>
            <button className="captureButton">캡처</button>
        </div>
  );
}

export default Camera;