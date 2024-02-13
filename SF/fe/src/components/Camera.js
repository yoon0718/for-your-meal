import { useEffect } from 'react';
import './css/camera.css'
import camimg from '../img/camera.png'

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
      const imageDataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageDataURL;
      link.download = `capture.png`;
      link.click();
    };
  },[]);

  return (
    <div className="camera">
      <video autoplay="true" className="video" width="426px" height="320px"></video>
      <canvas className="canvas"></canvas>
      <div className="captureButton"><img src={camimg} alt='camera' className='camimg'></img></div>
    </div>
  );
}

export default Camera;
