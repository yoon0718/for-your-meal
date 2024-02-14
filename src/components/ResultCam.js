import { useEffect, useState } from "react";
import loading from "../img/loading6.gif";
import "./css/ResultCam.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResultCam() {
  const navigate = useNavigate();
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [data, setData] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  
  useEffect(() => {
    setData(sessionStorage.getItem("선택된재료"))
    if (data != null) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  })
  const handleYesClick = () => {
    setShowCalendar(true);
  };

  const handleNoClick = () => {
    setShowInputBox(true);
  };

  const handleCancelClick = () => {
    sessionStorage.clear()
    sessionStorage.setItem("리셋","O")
    setData(null);
    setSelectedDate("");
    setShowCalendar(false);
    setShowInputBox(false);
  }

  const handleOKClick = () => {
    if (selectedDate === "") {
      alert("유통기한을 정확히 선택해주세요")
    } else {
      const post_data = {"ingredient" : data, "date" : selectedDate}
      axios.post("http://localhost/ingredient",post_data)
      .then(res => {
        alert("식재료가 냉장고에 넣어졌습니다")
        setData(null);
        setShowCalendar(false);
        setShowInputBox(false);
        setSelectedDate("");
        sessionStorage.clear()
        sessionStorage.setItem("리셋","O")
        navigate("/main/add", { replace: true });
      })
    }
  }

  const handleOKClick2 = () => {
    const ingre_name = document.querySelector(".result_box_input").value
    if (ingre_name === "") {
      alert("식재료를 정확히 입력해주세요")
    } else if (selectedDate === "") {
      alert("유통기한을 정확히 선택해주세요")
    } else {
      const post_data = {"ingredient" : ingre_name, "date" : selectedDate}
      axios.post("http://localhost/ingredient",post_data)
      .then(res => {
        alert("식재료가 냉장고에 넣어졌습니다")
        setData(null);
        setShowCalendar(false);
        setShowInputBox(false);
        setSelectedDate("");
        sessionStorage.clear()
        sessionStorage.setItem("리셋","O")
        navigate("/main/add", { replace: true });
      })
    }

  }

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
        <p>유통기한을 입력해주세요</p>
        <input className="result_box_cal" type="date" min={formattedDate} onChange={handleDateChange} />
        {/* {selectedDate && <p>선택한 날짜: {selectedDate}</p>} */}
        <div className="result_box_button">
          <button onClick={handleOKClick}>확인</button>
          <button onClick={handleCancelClick}>취소</button>
        </div>
      </div>
    );
  }

  if (showInputBox) {
    return (
      <div className="result_box">
        <p>식재료 이름과 유통기한을 입력해주세요</p>
        <input className="result_box_input" type="text" placeholder="식재료를 입력하세요" />
        <input className="result_box_cal" type="date" min={formattedDate} onChange={handleDateChange} />
        {/* {selectedDate && <p>선택한 날짜: {selectedDate}</p>} */}
        <div className="result_box_button">
          <button onClick={handleOKClick2}>확인</button>
          <button onClick={handleCancelClick}>취소</button>
        </div>
      </div>
    );
  }

  return (
    <div className="result_box">
      <p>선택된 재료 : {data}</p>
      <p>식재료 이름이 맞습니까?</p>
      <div className="result_box_button">
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
}
