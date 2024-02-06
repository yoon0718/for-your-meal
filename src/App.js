import React from 'react';

import './Font/font.css';

import Content1 from './components/Content1';
import Commit1 from './components/Commit1';
import Commit2 from './components/Commit2';
import Commit3 from './components/Commit3';
import Commit4 from './components/Commit4';
import Commit5 from './components/Commit5';
import Commit6 from './components/Commit6';
import ResultCook from './components/ResultCook';
import Expirationdate from './components/Expirationdate';
import VoiceC from './components/VoiceC';
import Content2 from './components/Content2';
import AudioRecorder2 from './components/AudioRecorder';
import Select from './components/select';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path = "/main" element={<Content1/>}/>
        <Route path = "/commit1" element={<Commit1/>}/>
        <Route path = "/commit2" element={<Commit2/>}/>
        <Route path = "/commit3" element={<Commit3/>}/>
        <Route path = "/commit4" element={<Commit4/>}/>
        <Route path = "/commit5" element={<Commit5/>}/>
        <Route path = "/commit6" element={<Commit6/>}/>
        <Route path = "/ResultCook" element={<ResultCook/>}/>
        <Route path = "/Expirationdate" element={<Expirationdate/>}/>
        <Route path="/" element={<Select />}></Route>
        <Route path="/Ai" element={<VoiceC />}></Route>
        <Route path="/main" element={<Content2 />}></Route>
        <Route path="/test" element={<AudioRecorder2 />}></Route>
      </Routes>
  );
}

export default App;
