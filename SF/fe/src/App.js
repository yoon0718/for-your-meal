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
import './css/select.css';
import './css/topic2.css';
import './css/topic2fastsearch.css'
import VoiceC from './components/VoiceC';
import AudioRecorder from './components/AudioRecorder';
import Loading from './components/Loading';
import Camera from './components/Camera';
import EmotionResult from './components/EmotionResult';
import RandomMenu from './components/RandomMenu';
import Topic2 from './components/Topic2';
import Topic2FastSearch from './components/Topic2FastSearch';
import Topic2Category from './components/Topic2Category';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Select />}></Route>
      <Route path="/Ai" element={<VoiceC />}></Route>      
      <Route path="/test" element={<AudioRecorder />}></Route>
      <Route path='/camera' element={<Camera/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/emoresult' element={<EmotionResult/>}/>
      <Route path='/randommenu' element={<RandomMenu/>}/>
      <Route path='/main' element={<Topic2/>}/>
      <Route path='/fastsearch' element={<Topic2FastSearch/>}/>
      <Route path='/category' element={<Topic2Category/>}/>
    </Routes>
  );
}

export default App;
