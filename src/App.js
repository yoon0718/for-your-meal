//npm install react-router-dom     
//npm install react-simple-chatbot
//npm install react-data-table-component
//npm install axios 
//(오류 뜰시 --force나 --legacy-peer-deps << 넣기)

import React from 'react';

import './Font/font.css';

import MainSlideHeader from './components/MainSlide_Header';
import VoiceC from './components/VoiceC';
import AudioRecorder2 from './components/VoiceAudioRecorder';
import Select from './components/select';
import Expirationdate from './components/MainExpirationdate';

import { Routes, Route } from 'react-router-dom';
import Loading from './components/VoiceLoading';
import ResultVoice from './components/VoiceResultCook';
import Initializing from './components/Initializing';
import Add from './components/Add';



function App() {
  return (
      <Routes>
        <Route path = "/" element={<Initializing/>}/>
        <Route path = "/main/*" element={<MainSlideHeader/>}/>
        <Route path="/select" element={<Select />}></Route>
        <Route path="/Ai" element={<VoiceC />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/test" element={<AudioRecorder2 />}></Route>
        <Route path="/emoresult" element={<ResultVoice />}></Route>
        <Route path="/test2" element={<Expirationdate />}></Route>
        <Route path="/Add" element={<Add />}></Route>
      </Routes>
  );
}

export default App;
