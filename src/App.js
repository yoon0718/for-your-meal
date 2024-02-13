//npm install react-router-dom     
//npm install react-simple-chatbot
//npm install react-data-table-component
//npm install axios 
//(오류 뜰시 --force나 --legacy-peer-deps << 넣기)

import React from 'react';

import './Font/font.css';

import Content1 from './components/Content1';
import VoiceC from './components/VoiceC';
import AudioRecorder2 from './components/AudioRecorder';
import Select from './components/select';
import Expirationdate from './components/Expirationdate';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import ResultVoice from './components/ResultVoice';
import Initializing from './components/Initializing';


function App() {
  return (
      <Routes>
        <Route path = "/" element={<Initializing/>}/>
        <Route path = "/main/*" element={<Content1/>}/>
        <Route path="/select" element={<Select />}></Route>
        <Route path="/Ai" element={<VoiceC />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/test" element={<AudioRecorder2 />}></Route>
        <Route path="/emoresult" element={<ResultVoice />}></Route>
        <Route path="/test2" element={<Expirationdate />}></Route>
      </Routes>
  );
}

export default App;
