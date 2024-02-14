import styled from 'styled-components';

const OPTIONS = [
  {
    value: '수박',
    name: '5 '
  },
  {
    value: '참외',
    name: '7 '
  },
  {
    value: '복숭아',
    name: '3 '
  },
  {
    value: '바나나',
    name: '21 '
  },
  {
    value: '파인애플',
    name: '3 '
  },
  {
    value: '아보카도',
    name: '3 '
  },
  {
    value: '감자',
    name: '4 '
  },
  {
    value: '입채류',
    name: '1 '
  },
  {
    value: '근채류',
    name: '2 '
  },
  {
    value: '가지',
    name: '3 '
  },
  {
    value: '호박',
    name: '7 '
  },
  {
    value: '단호박',
    name: '7 '
  },
  {
    value: '애호박',
    name: '7 '
  },
  {
    value: '새송이버섯',
    name: '7 '
  },
  {
    value: '양파',
    name: '60 '
  },
  {
    value: '적양파',
    name: '60 '
  },
  {
    value: '파프리카',
    name: '10 '
  },
  {
    value: '피망',
    name: '4 '
  },
  {
    value: '레몬',
    name: '30 '
  },
  {
    value: '골드키위',
    name: '7 '
  },
  {
    value: '그린키위',
    name: '5 '
  },
  {
    value: '시금치',
    name: '2 '
  },
  {
    value: '부추',
    name: '2 '
  },
  {
    value: '대파',
    name: '15 '
  },
  {
    value: '참깨',
    name: '365 '
  },
  {
    value: '구운 참깨',
    name: '365 '
  },
  {
    value: '고춧가루',
    name: '365 '
  },
  {
    value: '오이',
    name: '5 '
  },
  {
    value: '방울 토마토',
    name: '7 '
  },
  {
    value: '토마토',
    name: '3 '
  },
  {
    value: '사과',
    name: '60 '
  },
  {
    value: '브로콜리',
    name: '7 '
  },
  {
    value: '컬리플라워',
    name: '5 '
  },
  {
    value: '당근',
    name: '14 '
  },
  {
    value: '오렌지',
    name: '14 '
  },
  {
    value: '숙주',
    name: '5 '
  },
  {
    value: '콩나물',
    name: '8 '
  },
  {
    value: '무',
    name: '14 '
  },
  {
    value: '조개',
    name: '1 '
  },
  {
    value: '딸기',
    name: '3 '
  },
  {
    value: '블루베리',
    name: '7 '
  },
  {
    value: '치커리',
    name: '14 '
  },
  {
    value: '케일',
    name: '5 '
  },
  {
    value: '양배추',
    name: '14 '
  },
  {
    value: '자른 양배추',
    name: '7 '
  },
  {
    value: '양상추',
    name: '10 '
  },
  {
    value: '배추',
    name: '14 '
  },
  {
    value: '쪽파',
    name: '7 '
  },
  {
    value: '미나리',
    name: '5 '
  },
  {
    value: '고구마',
    name: '7 '
  },
  {
    value: '비트',
    name: '14 '
  },
  {
    value: '고추',
    name: '5 '
  },
  {
    value: '꽈리고추',
    name: '5 '
  },
  {
    value: '청양고추',
    name: '5 '
  },
  {
    value: '오이고추',
    name: '4 '
  },
  {
    value: '돌나물',
    name: '2 '
  },
  {
    value: '매생이',
    name: '7 '
  },
  {
    value: '새싹채소',
    name: '3 '
  },
  {
    value: '마',
    name: '7 '
  },
  {
    value: '삼',
    name: '7 '
  },
  {
    value: '현미',
    name: '30 '
  },
  {
    value: '밤',
    name: '60 '
  },
  {
    value: '생선',
    name: '1 '
  },
  {
    value: '달걀',
    name: '7 '
  },
  {
    value: '소고기',
    name: '3 '
  },
  {
    value: '돼지고기',
    name: '2 '
  },
  {
    value: '닭고기',
    name: '1 '
  },
  {
    value: '다진 고기',
    name: '2 '
  },
  {
    value: '간 고기',
    name: '2 '
  },
  {
    value: '얇게 썬 고기',
    name: '2 '
  },
  {
    value: '두껍게 썬 고기',
    name: '1 '
  },
  {
    value: '마늘',
    name: '30 '
  },
  {
    value: '다진 마늘',
    name: '7 '
  },
  {
    value: '통마늘',
    name: '7 '
  },
  {
    value: '표고버섯',
    name: '3 '
  },
  {
    value: '건표고버섯',
    name: '180 '
  },
  {
    value: '쌀뜨물',
    name: '3 '
  },
  {
    value: '말린콩',
    name: '무기한 '
  },
  {
    value: '쌀',
    name: '180 '
  },
  {
    value: '잡곡',
    name: '180 '
  },
  {
    value: '건다시마',
    name: '180 '
  },
  {
    value: '건미역',
    name: '545 '
  },
  {
    value: '함초',
    name: '7 '
  },
  {
    value: '바질',
    name: '7 '
  },
  {
    value: '로즈마리',
    name: '7 '
  },
  {
    value: '생땅콩',
    name: '14 '
  },
  {
    value: '볶은 땅콩',
    name: '180 '
  },
  {
    value: '호박잎',
    name: '3 '
  },
  {
    value: '들기름',
    name: '60 '
  },
  {
    value: '참기름',
    name: '180 '
  },
  {
    value: '레디쉬',
    name: '3 '
  },
  {
    value: '콩비지',
    name: '7 '
  },
  {
    value: '주꾸미',
    name: '3 '
  },
  {
    value: '밥',
    name: '2 '
  },
  {
    value: '옥수수',
    name: '3 '
  },
  {
    value: '새우',
    name: '1 '
  },
  {
    value: '깻잎',
    name: '1 '
  },
  {
    value: '육수',
    name: '3 '
  },
  {
    value: '콜라비',
    name: '7 '
  },
  {
    value: '논우렁',
    name: '5 '
  },
  {
    value: '아스파라거스',
    name: '7 '
  },
  {
    value: '두부',
    name: '15 '
  },
  {
    value: '묵',
    name: '3 '
  },
  {
    value: '팥앙금',
    name: '14 '
  }
];
const SelectBoxWrapper = styled.div`
  display: flex;
`;

export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: red;
  }
`;

const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;

const SelectBox = (props) => {
  const handleChange = (e) => {
    // event handler
    console.log(e.target.value);
  };

  return (
    <SelectBoxWrapper>
      <Select options={OPTIONS} isSearchable={true} onChange={handleChange}>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </Select>
      <IconSVG width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14L16 6H4L10 14Z" fill="#1A1A1A" />
      </IconSVG>
    </SelectBoxWrapper>
  );
};

function test3() {
  return <SelectBox options={OPTIONS}></SelectBox>;
}

export default test3;
