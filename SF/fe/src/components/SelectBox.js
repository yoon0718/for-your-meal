import React, { useState } from "react";
import Creatable from "react-select/creatable";
import "./css/selectbox.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const codeOptions = [
  {
    value: "수박",
    label: "수박"
  },
  {
    value: "참외",
    label: "참외"
  },
  {
    value: "복숭아",
    label: "복숭아"
  },
  {
    value: "바나나",
    label: "바나나"
  },
  {
    value: "파인애플",
    label: "파인애플"
  },
  {
    value: "아보카도",
    label: "아보카도"
  },
  {
    value: "감자",
    label: "감자"
  },
  {
    value: "가지",
    label: "가지"
  },
  {
    value: "호박",
    label: "호박"
  },
  {
    value: "단호박",
    label: "단호박"
  },
  {
    value: "애호박",
    label: "애호박"
  },
  {
    value: "새송이버섯",
    label: "새송이버섯"
  },
  {
    value: "양파",
    label: "양파"
  },
  {
    value: "적양파",
    label: "적양파"
  },
  {
    value: "파프리카",
    label: "파프리카"
  },
  {
    value: "피망",
    label: "피망"
  },
  {
    value: "레몬",
    label: "레몬"
  },
  {
    value: "키위",
    label: "키위"
  },
  {
    value: "시금치",
    label: "시금치"
  },
  {
    value: "부추",
    label: "부추"
  },
  {
    value: "대파",
    label: "대파"
  },
  {
    value: "참깨",
    label: "참깨"
  },
  {
    value: "고춧가루",
    label: "고춧가루"
  },
  {
    value: "오이",
    label: "오이"
  },
  {
    value: "방울 토마토",
    label: "방울 토마토"
  },
  {
    value: "토마토",
    label: "토마토"
  },
  {
    value: "사과",
    label: "사과"
  },
  {
    value: "브로콜리",
    label: "브로콜리"
  },
  {
    value: "콜리플라워",
    label: "콜리플라워"
  },
  {
    value: "당근",
    label: "당근"
  },
  {
    value: "오렌지",
    label: "오렌지"
  },
  {
    value: "숙주",
    label: "숙주"
  },
  {
    value: "콩나물",
    label: "콩나물"
  },
  {
    value: "무",
    label: "무"
  },
  {
    value: "팥앙금",
    label: "팥앙금"
  }
];

const colourStyles = {
  control: (style, { isFocused }) => ({
    ...style,

    backgroundColor: "lightblue",
    outline: "black",
    color: "black",
    width: "100%",
    fontSize: "4vh",
    marginBottom: "1%"
  }),
  option: (style, { isFocused }) => {
    return {
      ...style,
      backgroundColor: isFocused ? "#DDCEF5" : null,
      color: "#333333",
      width: "100%"
    };
  },
  singleValue: (base) => ({
    ...base,
    color: "black"
  }),
  menu: (provided) => ({
    ...provided,
    maxHeight: "15vh",
    overflowY: "scroll"
  })
};

const SelectBox = () => {
  const navigate = useNavigate();
  const [selectCode, setSelectCode] = useState("ALL");
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(codeOptions);

  const handleSelectChange = (selectedOption) => {
    if (selectedOption) {
      setSelectCode(selectedOption.value);
      setSelectedOption(selectedOption);
    } else {
      const newOption = { value: selectCode, label: selectCode };
      const updatedOptions = [...options, newOption];
      setSelectCode(selectCode);
      setOptions(updatedOptions);
      setSelectedOption(newOption);
    }
  };

  const handleInsertClick = () => {
    
    if (selectedOption) {
      const data = {"ingredient":selectedOption.value}
        axios.post("http://localhost/ingredient",data)
        .then(res => {
          alert("식재료가 냉장고에 넣어졌습니다")
          setSelectedOption(null);
          navigate("/main/add", { replace: true });
        })
    }
  };

  return (
    <div className="Select_box">
      <div className="Select_box_header">유통기한을 못찾겠나요?</div>
        <div className="Select_box_content">
          <Creatable
            defaultValue={codeOptions[0]}
            options={codeOptions}
            styles={colourStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8
            })}
            onChange={handleSelectChange}
          />
        {selectedOption && (
          <p className="Select_box_msg">식재료 {selectedOption.value} 이(가) 선택되었습니다.</p>
        )}
        <button className="Select_box_btn" onClick={handleInsertClick}>냉장고에 넣기</button>
      </div>
    </div>
  );
};

export default SelectBox;
