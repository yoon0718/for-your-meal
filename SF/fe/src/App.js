import { Routes, Route } from "react-router-dom";
import React from 'react';
import AudioRecorder from './components/AudioRecorder';
import Camera from './components/Camera';
import Loading from "./components/Loading";
import EmotionResult from "./components/EmotionResult";
import RandomMenu from "./components/RandomMenu";
import Topic2 from "./components/Topic2";
import "./css/topic2.css"

function App() {
  return (
    <Routes>
      <Route path='/' element={<AudioRecorder/>}/>
      <Route path='/camera' element={<Camera/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/emoresult' element={<EmotionResult/>}/>
      <Route path='/randommenu' element={<RandomMenu/>}/>
      <Route path='/topic2' element={<Topic2/>}/>
    </Routes>
  );
}

export default App;
