import React from 'react';
import './css/cam.css';
import Box from './Box';
import Camera from './Camera';

export default function Add() {
  return (
    <div>
      <div className="abody">
        <div className="all_box">
          <Camera></Camera>
          <div className="cam_box_result"></div>
          <div className="import_result">
            <div className="text_result"></div>
            <div className="text_result2">
              <Box></Box>
              
            </div>
          </div>
        </div>
        <div className="cam_box"></div>
      </div>
    </div>
  );
}
