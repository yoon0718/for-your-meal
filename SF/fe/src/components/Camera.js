import { useEffect } from "react";

function Camera() {
    useEffect(() => {
        const video = document.querySelector(".video");
    const canvas = document.querySelector(".canvas");
    const captureButton = document.querySelector(".captureButton");
    
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

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
        const imageDataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageDataURL;
        link.download = `${year}${month}${day}${hours}${minutes}${seconds}.png`;
        link.click();
    };
    })
    
  return (
    <div className="container">
            <video autoplay="true" className="video"></video>
            <canvas className="canvas"></canvas>
            <button className="captureButton">캡처</button>
        </div>
  );
}

export default Camera;