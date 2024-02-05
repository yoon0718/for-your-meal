import { Routes, Route } from "react-router-dom";
import React from 'react';
import AudioRecorder from './components/AudioRecorder';
import Camera from './components/Camera';
import Loading from "./components/Loading";
import EmotionResult from "./components/EmotionResult";
import RandomMenu from "./components/RandomMenu";
import Topic2 from "./components/Topic2";
import Topic2FastSearch from "./components/Topic2FastSearch";
import Topic2Category from "./components/Topic2Category";
import "./css/topic2.css"
import "./css/topic2fastsearch.css"

function App() {
  return (
    <Routes>
      <Route path='/' element={<AudioRecorder/>}/>
      <Route path='/camera' element={<Camera/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/emoresult' element={<EmotionResult/>}/>
      <Route path='/randommenu' element={<RandomMenu/>}/>
      <Route path='/topic2' element={<Topic2/>}/>
      <Route path='/fastsearch' element={<Topic2FastSearch/>}/>
      <Route path='/category' element={<Topic2Category/>}/>
    </Routes>
  );
}

export default App;
