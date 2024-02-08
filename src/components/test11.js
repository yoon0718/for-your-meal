import React from 'react';
import './cam.css';
import Test3 from './test3';
import Camera from './camera';

export default function Test11() {
  return (
    <div>
      <div className="abody">
        <div className="all_box">
          <Camera></Camera>
          <div className="cam_box_result"></div>
          <div className="import_result">
            <div className="text_result"></div>
            <div className="text_result2">
              <Test3></Test3>
              <button>삽입</button>
              <p>( ) 이(가) 넣어 졌읍니다.</p>
            </div>
          </div>
        </div>
        <div className="cam_box"></div>
      </div>
    </div>
  );
}
