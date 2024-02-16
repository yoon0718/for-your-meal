// ------------음성인식 녹화 부분입니다.------------

import React, { useState } from 'react';
import './css/VoiceC.css';
import homebtn from '../img/home.png';
import AudioRecorder from './VoiceAudioRecorder';

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
      <div className='homebtndiv'>
        <img src={homebtn} className="homebtn" onClick={gohome}></img>
      </div>
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
      <AudioRecorder onRecordingChange={handleRecordingChange} isRecording={isRecording} />
    </div>
  );
}

export default VoiceC;
