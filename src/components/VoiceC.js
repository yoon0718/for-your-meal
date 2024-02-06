import React from 'react';
import './css/VoiceC.css';
import homebtn from '../img/home.png';

import AudioRecorder from './AudioRecorder';

function VoiceC() {
  const gohome = () => {
    window.location.href = '/';
  };

  return (
    <div className="Vbody">
      <div className="color-change-5x">
        <div className="loadingio-spinner-ripple-y05os7hhvii">
          <div className="ldio-fi0u2squulj">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <img src={homebtn} className="homebtn" onClick={gohome}></img>
      <div className="audiobox">
        <AudioRecorder></AudioRecorder>
      </div>
    </div>
  );
}

export default VoiceC;
