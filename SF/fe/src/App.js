//npm install --legacy-peer-deps react-simple-chatbot --save
//npm install --legacy-peer-deps react-ticker
//npm install --legacy-peer-deps react-audio-voice-recorder
//npm install --legacy-peer-deps --save react-mic
//npm install --legacy-peer-deps fluent-ffmpeg

import React from 'react';
import Select from './components/select';
import './App.css';
import './components/select';
import { Route, Routes } from 'react-router-dom';
import './components/css/select.css';
import VoiceC from './components/VoiceC';
import AudioRecorder from './components/AudioRecorder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Select />}></Route>
      <Route path="/Ai" element={<VoiceC />}></Route>      
      <Route path="/test" element={<AudioRecorder />}></Route>
    </Routes>
  );
}

export default App;
