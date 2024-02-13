import React, { useState } from "react";
import Creatable from "react-select/creatable";
import "./css/selectbox.css";

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
    value: "입채류",
    label: "입채류"
  },
  {
    value: "근채류",
    label: "근채류"
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
    value: "골드키위",
    label: "골드키위"
  },
  {
    value: "그린키위",
    label: "그린키위"
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
    value: "구운 참깨",
    label: "구운 참깨"
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
    value: "컬리플라워",
    label: "컬리플라워"
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
    width: "100%"
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
  })
};

const SelectBox = () => {
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
      // Perform the insertion logic here
      console.log(selectedOption.value + "이(가) 넣어 졌읍니다.");
    }
  };

  return (
    <div className="Select_box">
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
        <p>식재료 ({selectedOption.value}) 이 넣어졌습니다.</p>
      )}
      <button onClick={handleInsertClick}>이 재료가 맞습니까?</button>
    </div>
  );
};

export default SelectBox;
