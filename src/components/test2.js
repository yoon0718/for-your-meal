import React, { useState, useEffect } from "react";
import loading from "../img/loading3.gif";
import "./css/test2.css";

export default function Test2() {
  const [showContent, setShowContent] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 2초 후에 상태 변경

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  const handleYesClick = () => {
    setShowCalendar(true);
  };

  const handleNoClick = () => {
    setShowInputBox(true);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  if (!showContent) {
    return (
      <div className="result_box">
        <img src={loading} alt="로딩 중..." />
      </div>
    );
  }

  if (showCalendar) {
    return (
      <div className="result_box">
        <input type="date" onChange={handleDateChange} />
        {selectedDate && <p>선택한 날짜: {selectedDate}</p>}
        <button>확인</button>
        <button>취소</button>
      </div>
    );
  }

  if (showInputBox) {
    return (
      <div className="result_box">
        <input type="text" placeholder="식재료를 입력하세요" />
        <input type="date" onChange={handleDateChange} />
        {selectedDate && <p>선택한 날짜: {selectedDate}</p>}
        <button>확인</button>
        <button>취소</button>
      </div>
    );
  }

  return (
    <div className="result_box">
      <p>식재료 이름이 맞습니까?</p>
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>
    </div>
  );
}
