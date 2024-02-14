import React from "react";
import "./css/Add.css";
import Camera from "./camera"
import SelectBox from "./SelectBox";
import ResultCam from "./ResultCam";

export default function Add() {

  return (
    <div className="add_wrap">
      <div className="abody">
        <div className="all_box">
          <Camera/>
          <div className="import_result">
            <div className="text_result">
              <div className="text_header">결과 보기</div>
              <ResultCam/>
            </div>
            <div className="text_result2">
              <SelectBox/>
            </div>
          </div>
        </div>
        <div className="cam_box">
          <div className="cam_box_header">설명서</div>
          <div className="cam_box_content">
            1. 식재료를 렌즈에 대고 촬영버튼을 눌러 사진을 촬영해주세요 <br/><br/>
            2. 결과 보기 창에 결과가 출력되면 정답 유무를 선택해주세요 <br/><br/>
            3. 오답이라면 올바른 식재료명을 입력해주세요 <br/><br/>
            4. 유통기한을 선택한 후 냉장고에 넣기 버튼을 클릭해주세요 <br/><br/>
            5. 식재료의 유통기한을 못찾겠다면 "유통기한을 못찾겠나요?" 창을 이용해주세요 <br/><br/>
            6. "유통기한을 못찾겠나요?" 창을 통해 추가한 식재료는 적힌 유통기한을 너무 신용하지 마시고 가급적 빠르게 소비해주세요
          </div>
        </div>
      </div>
    </div>
  );
}
