// ----------메인레시피 부분 오른쪽 슬라이더의 챗봇 부분입니다.----------

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Chatbot from 'react-simple-chatbot';
import './css/ai.css';
import { useNavigate } from 'react-router-dom';

const Theme = {
  background: '#f5f8fb',
  headerBgColor: '#756050',
  width: '100%',
  headerFontColor: '#fff',
  headerFontSize: '2.5vh',
  botBubbleColor: '#9c826f',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  
};
const MainChatbot = () => {
  const navigate = useNavigate();
  const [selectedtype, setSelectedtype] = useState('선택안함');
  const [selectedway, setSelectedway] = useState('선택안함');
  const [selectedingre, setSelectedingre] = useState('선택안함');
  useEffect(() => {
    const footercontent = [selectedway, selectedtype, selectedingre]
    const footer = document.querySelector('.rsc-input')
    footer.placeholder = footercontent;
  })

  useEffect(() => {
    const container = document.querySelector('.rsc-container')
    const selectinput = document.querySelector('.rsc-input')
    const content = document.querySelector(".rsc-content")
    container.style.width = '100%';
    container.style.height = '100%';
    content.style.height = '75%';
    selectinput.style.fontSize = '2vh';
  })

  const bubbleStyle = {
    fontSize: "2vh"
  };

  const handleOptionSelection2 = (value) => {
    setSelectedway(value);
    return value;
  };

  const handleOptionSelection1 = (value) => {
    setSelectedtype(value);
    return value;
  };

  const handleOptionSelection3 = (value) => {
    setSelectedingre(value);
    return value;
  };
  const saveresult = () => {
    if (result.요리종류 === '선택안함' | result.요리종류.includes('랜덤')) {
      result.요리종류 = '';
    }
    if (result.조리방법 === '선택안함' | result.조리방법.includes('랜덤')) {
      result.조리방법 = '';
    }
    if (result.재료 === '선택안함' | result.재료.includes('랜덤')) {
      result.재료 = '';
    }
    sessionStorage.setItem("요리종류",result.요리종류)
    sessionStorage.setItem("조리방법",result.조리방법)
    sessionStorage.setItem("재료",result.재료)
    navigate("/main/commit2");
  }

  const result = {"요리종류" : selectedtype, "조리방법" : selectedway, "재료" : selectedingre};

  const steps = [
    {
      id: '1',
      message: '우리 함께 요리할 것을 찾아볼까요?',
      trigger: 'userChoice'
    },
    {
      id: 'userChoice',
      options: [{ value: '조리 방법별', label: '여기를 클릭해주세요!', trigger: 'cookingMethod' }]
    },
    {
      id: 'cookingMethod',
      message: '어떤 조리 방법으로 요리를 선택하시겠어요?',
      trigger: 'cookingMethodChoice'
    },
    {
      id: 'cookingMethodChoice',
      options: [
        { value: 'cc-1', label: '굽기', trigger: () => handleOptionSelection2('굽기') },
        { value: 'cc-2', label: '끓이기', trigger: () => handleOptionSelection2('끓이기') },
        { value: 'cc-3', label: '볶기', trigger: () => handleOptionSelection2('볶기') },
        { value: 'cc-4', label: '찌기', trigger: () => handleOptionSelection2('찌기') },
        { value: 'cc-5', label: '튀기기', trigger: () => handleOptionSelection2('튀기기') },
        { value: 'skip-cc', label: '아무거나', trigger: () => handleOptionSelection2('조리방법 랜덤선택') } //전체선택
      ]
    },
    {
      id: '굽기',
      message: '굽기를 선택하셨군요! 지글지글! 전 굽는게 제일 좋아요!',
      trigger: 'cc-1-a'
    },
    {
      id: 'cc-1-a',
      options: [
        { value: '요리 종류별', label: '요리 종류별로 선택하러 가기', trigger: 'recipeType' },
        { value: 'cookingMethodChoice', label: '이전으로 돌아가기', trigger: 'cookingMethodChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '끓이기',
      message: '보글보글~~ 오늘은 뜨끈한 국밥?!',
      trigger: 'cc-2-a'
    },
    {
      id: 'cc-2-a',
      options: [
        { value: '요리 종류별', label: '요리 종류별로 선택하러 가기', trigger: 'recipeType' },
        { value: 'cookingMethodChoice', label: '이전으로 돌아가기', trigger: 'cookingMethodChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '볶기',
      message: '볶는것은 항상 옳죠! 전 볶음밥이 좋아요!',
      trigger: 'cc-3-a'
    },
    {
      id: 'cc-3-a',
      options: [
        { value: '요리 종류별', label: '요리 종류별로 선택하러 가기', trigger: 'recipeType' },
        { value: 'cookingMethodChoice', label: '이전으로 돌아가기', trigger: 'cookingMethodChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '찌기',
      message: '찜기에 넣고 푹푹 쪄볼까요?',
      trigger: 'cc-4-a'
    },
    {
      id: 'cc-4-a',
      options: [
        { value: '요리 종류별', label: '요리 종류별로 선택하러 가기', trigger: 'recipeType' },
        { value: 'cookingMethodChoice', label: '이전으로 돌아가기', trigger: 'cookingMethodChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '튀기기',
      message: '튀김은 신발을 튀겨도 맛있대요!',
      trigger: 'cc-5-a'
    },
    {
      id: 'cc-5-a',
      options: [
        { value: '요리 종류별', label: '요리 종류별로 선택하러 가기', trigger: 'recipeType' },
        { value: 'cookingMethodChoice', label: '이전으로 돌아가기', trigger: 'cookingMethodChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '조리방법 랜덤선택',
      message: '아무거나를 선택하셨군요! 제맘대로 추천해드릴게요! 마음에 안드신다고 해도.. 거절은 거절해요!',
      trigger: 'skip-cc-a'
    },

    {
      id: 'skip-cc-a',
      options: [
        { value: '요리 종류별', label: '요리 종류별로 선택하러 가기', trigger: 'recipeType' },
        { value: 'cookingMethodChoice', label: '이전으로 돌아가기', trigger: 'cookingMethodChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    // 요리 종류별 선택
    {
      id: 'recipeType',
      message: '어떤 종류의 요리를 선택하시겠어요?',
      trigger: 'recipeTypeChoice'
    },
    {
      id: 'recipeTypeChoice',
      options: [
        { value: 'rc-1', label: '국&찌개', trigger: () => handleOptionSelection1('국&찌개') },
        { value: 'rc-2', label: '반찬', trigger: () => handleOptionSelection1('반찬') },
        { value: 'rc-3', label: '밥', trigger: () => handleOptionSelection1('밥') },
        { value: 'rc-4', label: '일품', trigger: () => handleOptionSelection1('일품') },
        { value: 'rc-5', label: '후식', trigger: () => handleOptionSelection1('후식') },
        { value: 'rc-6', label: '기타', trigger: () => handleOptionSelection1('기타') },
        { value: 'skip-rc', label: '아무거나', trigger: () => handleOptionSelection1('요리 종류 랜덤선택') },
        { value: 'cc-1-a', label: '이전으로 돌아가기', trigger: 'cc-1-a' }
      ]
    },
    {
      id: '국&찌개',
      message: '국&찌개를 선택하셨네요? 전 들깨미역국만 아니면 되요! ',
      trigger: 'rc-1-a'
    },
    {
      id: 'rc-1-a',
      options: [
        { value: 'ingredient', label: '요리 재료별로 선택하러 가기', trigger: 'ingredient' },
        { value: 'recipeTypeChoice', label: '이전으로 돌아가기', trigger: 'recipeTypeChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '반찬',
      message: '반찬은 역시 고기반찬! ',
      trigger: 'rc-2-a'
    },
    {
      id: 'rc-2-a',
      options: [
        { value: 'ingredient', label: '요리 재료별로 선택하러 가기', trigger: 'ingredient' },
        { value: 'recipeTypeChoice', label: '이전으로 돌아가기', trigger: 'recipeTypeChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '밥',
      message: '자고로 밥이 맛있으면 뭐든 맛있죠! ',
      trigger: 'rc-3-a'
    },
    {
      id: 'rc-3-a',
      options: [
        { value: 'ingredient', label: '요리 재료별로 선택하러 가기', trigger: 'ingredient' },
        { value: 'recipeTypeChoice', label: '이전으로 돌아가기', trigger: 'recipeTypeChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '일품',
      message: '일품은 주식과 부식 같은 한 끼 음식을 그릇에 담아 간편하게 먹을 수 있는 요리랍니다. :) ',
      trigger: 'rc-4-a'
    },
    {
      id: 'rc-4-a',
      options: [
        { value: 'ingredient', label: '요리 재료별로 선택하러 가기', trigger: 'ingredient' },
        { value: 'recipeTypeChoice', label: '이전으로 돌아가기', trigger: 'recipeTypeChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '후식',
      message: '후식은 달달한게 좋겠죵? ',
      trigger: 'rc-5-a'
    },
    {
      id: 'rc-5-a',
      options: [
        { value: 'ingredient', label: '요리 재료별로 선택하러 가기', trigger: 'ingredient' },
        { value: 'recipeTypeChoice', label: '이전으로 돌아가기', trigger: 'recipeTypeChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '기타',
      message: '빵이나 샐러드, 파스타 같은 양식이랍니다',
      trigger: 'rc-6-a'
    },
    {
      id: 'rc-6-a',
      options: [
        { value: 'ingredient', label: '요리 재료별로 선택하러 가기', trigger: 'ingredient' },
        { value: 'recipeTypeChoice', label: '이전으로 돌아가기', trigger: 'recipeTypeChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    {
      id: '요리 종류 랜덤선택',
      message: '아무거나 라구요!? 후회는 없는거죠?ㅎㅎ',
      trigger: 'skip-rc-a'
    },
    {
      id: 'skip-rc-a',
      options: [
        { value: 'ingredient', label: '요리 재료별로 선택하러 가기', trigger: 'ingredient' },
        { value: 'recipeTypeChoice', label: '이전으로 돌아가기', trigger: 'recipeTypeChoice' },
        { value: 'result', label: '결과보기', trigger: 'result' }
      ]
    },
    // 재료별 선택

    {
      id: 'ingredient',
      message: '어떤 재료로 요리를 해볼까요?',
      trigger: 'ingredientChoice'
    },
    {
      id: 'ingredientChoice',
      options: [
        { value: 'noodle', label: '면', trigger: 'noodle' },
        { value: 'meat', label: '육류', trigger: 'meat' },
        { value: 'seafood', label: '해산물', trigger: 'seafood' },
        { value: 'dairy', label: '유제품', trigger: 'dairy' },
        { value: 'other', label: '그 외의 재료', trigger: 'other' },
        { value: 'skip-ic', label: '아무거나', trigger: () => handleOptionSelection3('재료 랜덤선택') },
        { value: 'skip-rc-a', label: '이전으로 돌아가기', trigger: 'skip-rc-a' }
      ]
    },
    {
      id: 'noodle',
      message: '어떤 종류의 면으로 요리를 선택하시겠어요?',
      trigger: 'noodleChoice'
    },
    {
      id: 'noodleChoice',
      options: [
        { value: 'nc-1', label: '당면', trigger: () => handleOptionSelection3('당면') },
        { value: 'nc-2', label: '파스타면', trigger: () => handleOptionSelection3('파스타면') },
        { value: 'nc-3', label: '라면', trigger: () => handleOptionSelection3('라면') },
        { value: 'nc-4', label: '다른 면', trigger: () => handleOptionSelection3('다른 면') },
        { value: 'nc-5', label: '아무거나', trigger: () => handleOptionSelection3('면 랜덤선택') },
        { value: 'ingredientChoice', label: '이전으로 돌아가기', trigger: 'ingredientChoice' }
      ]
    },
    {
      id: '당면',
      message: '생각보다 당면으로 할수있는 요리가 많아요!',
      trigger: 'nc-1-a'
    },
    {
      id: 'nc-1-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'noodleChoice', label: '이전으로 돌아가기', trigger: 'noodleChoice' },
        { value: 'cookingMethod', label: '처음부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '파스타면',
      message: '양식의 근본은 역시 파스타죠!?',
      trigger: 'nc-2-a'
    },
    {
      id: 'nc-2-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'noodleChoice', label: '이전으로 돌아가기', trigger: 'noodleChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '라면',
      message: '후루룩짭짭 후루룩짭짭 맛좋은 라면~🎵',
      trigger: 'nc-3-a'
    },
    {
      id: 'nc-3-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'noodleChoice', label: '이전으로 돌아가기', trigger: 'noodleChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '다른 면',
      message: '여기엔 메밀면, 우동, 소면, 쌀국수 요리가 있어요',
      trigger: 'nc-4-a'
    },
    {
      id: 'nc-4-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'noodleChoice', label: '이전으로 돌아가기', trigger: 'noodleChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '면 랜덤선택',
      message: '혹시 오마카세를 좋아하시나요?',
      trigger: 'nc-5-a'
    },
    {
      id: 'nc-5-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'noodleChoice', label: '이전으로 돌아가기', trigger: 'noodleChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: 'meat',
      message: '어떤 종류의 고기를 원하시나요?',
      trigger: 'meatChoice'
    },
    {
      id: 'meatChoice',
      options: [
        { value: 'mc-1', label: '소고기', trigger: () => handleOptionSelection3('소고기') },
        { value: 'mc-2', label: '돼지고기 ', trigger: () => handleOptionSelection3('돼지고기') },
        { value: 'mc-3 ', label: '닭고기 ', trigger: () => handleOptionSelection3('닭고기') },
        { value: 'mc-4', label: '다른 고기', trigger: () => handleOptionSelection3('다른 고기') },
        { value: 'mc-5', label: '아무거나', trigger: () => handleOptionSelection3('육류 랜덤선택') },
        { value: 'ingredientChoice', label: '이전으로 돌아가기', trigger: 'ingredientChoice' }
      ]
    },
    {
      id: '소고기',
      message: '월급날이신가요?! 저도 소고기 한입만..',
      trigger: 'mc-1-a'
    },
    {
      id: 'mc-1-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'meatChoice', label: '이전으로 돌아가기', trigger: 'meatChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '돼지고기',
      message: '오늘은 목구멍에 기름칠좀 해볼까요?',
      trigger: 'mc-2-a'
    },
    {
      id: 'mc-2-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'meatChoice', label: '이전으로 돌아가기', trigger: 'meatChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '닭고기',
      message: '치느님을 영접해보아요!',
      trigger: 'mc-3-a'
    },
    {
      id: 'mc-3-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'meatChoice', label: '이전으로 돌아가기', trigger: 'meatChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '다른 고기',
      message: '오리고기나 양고기가 준비되어 있어요.',
      trigger: 'mc-4-a'
    },
    {
      id: 'mc-4-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'meatChoice', label: '이전으로 돌아가기', trigger: 'meatChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '육류 랜덤선택',
      message: '고기는 다 고기서 고기죠?!',
      trigger: 'mc-5-a'
    },
    {
      id: 'mc-5-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'meatChoice', label: '이전으로 돌아가기', trigger: 'meatChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: 'seafood',
      message: '어떤 종류의 해산물로 요리를 선택하시겠어요?',
      trigger: 'seafoodChoice'
    },
    {
      id: 'seafoodChoice',
      options: [
        { value: '새우 ', label: '새우 ', trigger: () => handleOptionSelection3('새우') },
        { value: '오징어  ', label: '오징어  ', trigger: () => handleOptionSelection3('오징어') },
        { value: '조개  ', label: '조개  ', trigger: () => handleOptionSelection3('조개') },
        { value: 'sc-4', label: '다른 생선류', trigger: () => handleOptionSelection3('다른 생선류') },
        { value: 'sc-5', label: '다른 두족류', trigger: () => handleOptionSelection3('다른 두족류') },
        { value: 'sc-6', label: '그 이외의 해산물', trigger: () => handleOptionSelection3('그 이외의 해산물') },
        { value: 'sc-7', label: '아무거나', trigger: () => handleOptionSelection3('해산물 랜덤선택') },
        { value: 'ingredientChoice', label: '이전으로 돌아가기', trigger: 'ingredientChoice' }
      ]
    },
    {
      id: '해산물 랜덤선택',
      message: '안녕하새우!',
      trigger: 'sc-7-a'
    },
    {
      id: 'sc-7-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'seafoodChoice', label: '이전으로 돌아가기', trigger: 'seafoodChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '새우',
      message: '안녕하새우!',
      trigger: 'sc-1-a'
    },
    {
      id: 'sc-1-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'seafoodChoice', label: '이전으로 돌아가기', trigger: 'seafoodChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '오징어',
      message: '오징어게임하고는 상관이 없어요!',
      trigger: 'sc-2-a'
    },
    {
      id: 'sc-2-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'seafoodChoice', label: '이전으로 돌아가기', trigger: 'seafoodChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '조개',
      message: '새조개 샤브샤브가 맛있다면서요?',
      trigger: 'sc-3-a'
    },
    {
      id: 'sc-3-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'seafoodChoice', label: '이전으로 돌아가기', trigger: 'seafoodChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '다른 생선류',
      message:
        '고등어, 황태, 북어, 대구, 백태, 삼치, 광어, 연어, 민어, 조기, 코다리, 생선살, 장어, 아귀, 가자미, 꽁치, 명태, 병어, 갈치, 금태, 도미, 흰살생선 이 준비 되어 있어요.',
      trigger: 'sc-4-a'
    },
    {
      id: 'sc-4-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'seafoodChoice', label: '이전으로 돌아가기', trigger: 'seafoodChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '다른 두족류',
      message: '싱싱한 쭈꾸미! 낙지! 문어!가 왔어요~~',
      trigger: 'sc-1-a'
    },
    {
      id: 'sc-5-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'seafoodChoice', label: '이전으로 돌아가기', trigger: 'seafoodChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '그 이외의 해산물',
      message: '홍합, 전복, 굴, 꼬막, 바지락, 소라, 멍게, 꽃게 로 요리를 해보아용',
      trigger: 'sc-6-a'
    },
    {
      id: 'sc-6-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'seafoodChoice', label: '이전으로 돌아가기', trigger: 'seafoodChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '재료 랜덤선택',
      message: '당신은 아무거나를 좋아하는 분임이 분명합니다.',
      trigger: 'skip-ic-a'
    },
    {
      id: 'skip-ic-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'ingredientChoice', label: '이전으로 돌아가기', trigger: 'ingredientChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: 'dairy',
      message: '유당불내증도 극복!',
      trigger: 'dairyChoice'
    },
    {
      id: 'dairyChoice',
      options: [
        { value: 'dc-1', label: '우유 ', trigger: () => handleOptionSelection3('우유') },
        { value: '치즈   ', label: '치즈', trigger: () => handleOptionSelection3('치즈') },
        { value: '버터   ', label: '버터', trigger: () => handleOptionSelection3('버터') },
        { value: '생크림 ', label: '생크림', trigger: () => handleOptionSelection3('생크림') },
        { value: 'dc-5', label: '요거트류', trigger: () => handleOptionSelection3('요거트류') },
        { value: 'ingredientChoice', label: '이전으로 돌아가기', trigger: 'ingredientChoice' }
      ]
    },

    {
      id: '우유',
      message: 'MILK!!!!!!! i love kepco!?',
      trigger: 'dc-1-a'
    },
    {
      id: 'dc-1-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'dairyChoice', label: '이전으로 돌아가기', trigger: 'dairyChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: '치즈',
      message: '피자는 치즈빨이라던데요?',
      trigger: 'dc-2-a'
    },
    {
      id: 'dc-2-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'dairyChoice', label: '이전으로 돌아가기', trigger: 'dairyChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: '버터',
      message: '버터중에 제일 유명한 거는 BTS-butter래~요',
      trigger: 'dc-3-a'
    },
    {
      id: 'dc-3-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'dairyChoice', label: '이전으로 돌아가기', trigger: 'dairyChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: '생크림',
      message: '생크림 빵이 나올까요?',
      trigger: 'dc-4-a'
    },
    {
      id: 'dc-4-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'dairyChoice', label: '이전으로 돌아가기', trigger: 'dairyChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: '요거트류',
      message: '요구르트나 두유, 요거트가 있어요',
      trigger: 'dc-5-a'
    },
    {
      id: 'dc-5-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'dairyChoice', label: '이전으로 돌아가기', trigger: 'dairyChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: 'other',
      message: '어떤 종류의 기타 재료로 요리를 선택하시겠어요?',
      trigger: 'otherChoice'
    },
    {
      id: 'otherChoice',
      options: [
        { value: 'oc-1', label: '김치', trigger: () => handleOptionSelection3('김치') },
        { value: 'oc-2', label: '달걀', trigger: () => handleOptionSelection3('달걀') },
        { value: 'oc-3', label: '두부', trigger: () => handleOptionSelection3('두부') },
        { value: 'oc-4', label: '가공식품', trigger: () => handleOptionSelection3('가공식품') },
        { value: 'ingredientChoice', label: '이전으로 돌아가기', trigger: 'ingredientChoice' }
      ]
    },
    {
      id: '김치',
      message: '한국인의 근본!',
      trigger: 'oc-1-a'
    },
    {
      id: 'oc-1-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'otherChoice', label: '이전으로', trigger: 'otherChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '달걀',
      message: '전 오믈렛이 좋아요.',
      trigger: 'oc-2-a'
    },
    {
      id: 'oc-2-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'otherChoice', label: '이전으로', trigger: 'otherChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '두부',
      message: '취두부는 없어욥!',
      trigger: 'oc-3-a'
    },
    {
      id: 'oc-3-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'otherChoice', label: '이전으로', trigger: 'otherChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },
    {
      id: '가공식품',
      message: '참치! 햄! 소시지! 베이컨! 떡 요리! 맛있겟당..츄릅',
      trigger: 'oc-4-a'
    },
    {
      id: 'oc-4-a',
      options: [
        { value: 'result', label: '결과보기', trigger: 'result' },
        { value: 'otherChoice', label: '이전으로', trigger: 'otherChoice' },
        { value: 'cookingMethod', label: '조리방법부터 다시 선택', trigger: 'cookingMethod' }
      ]
    },

    {
      id: 'result',
      message: '결과보내기',
      end: true
    }
  ];

  const chatbotStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  };

  return (
    <ThemeProvider theme={Theme}>
      <div className="chatbot" style={chatbotStyle}>
        <Chatbot
          headerTitle="오늘은 내가 요리사!"
          bubbleStyle={bubbleStyle}
          steps={steps}
          handleEnd={() => {
            saveresult();
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default MainChatbot;
