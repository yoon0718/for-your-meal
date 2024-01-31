//npm i react-slick
//npm i slick-carousel

import React from 'react';
import './App.css';
import Headers from './components/Headers';
import Content1 from './components/Content1';
import logo from './img/logo.png';
import Content2 from './components/Content2';
import AudioRecorder from './components/AudioRecorder';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="padding">
          <div className="top">
            <div className="logo_box">
              {/* <Headers /> */}
              <img className="logo" src={logo}></img>
            </div>
          </div>

          <AudioRecorder></AudioRecorder>
        </div>
      </div>
    </div>
  );
}

export default App;
