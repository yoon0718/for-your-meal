import React from "react";
import "./css/cam.css";
import Test3 from "./SelectBox";
import Camera from "./camera";
import Test2 from "./test2";
import "./css/text_results.css";

export default function Test11() {
  return (
    <div>
      <div className="abody">
        <div className="all_box">
          {/* <Camera></Camera> */}
          <div className="cam_box_result"></div>
          <div className="import_result">
            <div className="text_result">
              <Test2></Test2>
            </div>
            <div className="text_result2">
              <Test3></Test3>
            </div>
          </div>
        </div>
        <div className="cam_box"></div>
      </div>
    </div>
  );
}
