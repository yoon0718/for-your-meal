//npm install --legacy-peer-deps react-simple-chatbot --save
//npm install --legacy-peer-deps react-audio-voice-recorder
//npm install --legacy-peer-deps --save react-mic
//npm install --legacy-peer-deps fluent-ffmpeg
//npm i --save react-select
//npm i react-data-table-component

import React from "react";
import Select from "./components/select";
import "./App.css";
import "./components/select";
import { Route, Routes } from "react-router-dom";
import "./components/css/select.css";
import VoiceC from "./components/VoiceC";
import Content2 from "./components/Content2";
import AudioRecorder2 from "./components/AudioRecorder";
import Test11 from "./components/test11";
import Test3 from "./components/SelectBox";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Select />}></Route>
      <Route path="/Ai" element={<VoiceC />}></Route>
      <Route path="/main" element={<Content2 />}></Route>
      <Route path="/test" element={<AudioRecorder2 />}></Route>
      <Route path="/test1" element={<Test11 />}></Route>
      <Route path="/test3" element={<Test3 />}></Route>
    </Routes>
  );
}

export default App;
