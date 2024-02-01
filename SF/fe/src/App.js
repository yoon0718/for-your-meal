import { Routes, Route } from "react-router-dom";
import React from 'react';
import AudioRecorder from './components/AudioRecorder';
import Camera from './components/Camera';
import Loading from "./components/Loading";
import EmotionResult from "./components/EmotionResult";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AudioRecorder/>}/>
      <Route path='/camera' element={<Camera/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/emoresult' element={<EmotionResult/>}/>
    </Routes>
  );
}

export default App;
