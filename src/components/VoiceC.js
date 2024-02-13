import React, { useState } from 'react';
import './css/VoiceC.css';
import homebtn from '../img/home.png';
import AudioRecorder from './AudioRecorder';

function VoiceC() {
  const [isRecording, setIsRecording] = useState(false); // 녹화 상태를 관리하는 state

  const gohome = () => {
    window.location.href = '/select';
  };

  // 녹화 상태를 변경하는 함수
  const handleRecordingChange = (recording) => {
    setIsRecording(recording);
  };

  return (
    <div className={`Vbody`}>
      <div className={`color-change-5x ${isRecording ? 'hidden' : ''}`}>
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
        <AudioRecorder onRecordingChange={handleRecordingChange} isRecording={isRecording} />
      </div>
    </div>
  );
}

export default VoiceC;
