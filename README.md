# Project Name : for-your-meal
## Team MILK(Mission: I Love Kepco) 🥛

### 팀원
장성호(Jssong-ho, PL), 임태환(lth0813, APL), 강다솜(sosomm20141212), 윤여록(yoon0718), 김동일(SSunkist), 명하영

### 프로젝트 소개
KepcoA final project 1조 / 냉장고 디스플레이에 탑재할 레시피 추천 기능 프로그램 Web 구현
- Topic1 : 오늘은 내가 요리사
  : 식재료 인식 모델을 통한 냉장고 내 재료 관리 및 재료에 따른 음식 레시피 추천
- Topic2 : 지금 이런 음식 어떠신가요?
  : 음성인식을 통한 사용자의 감정 분류 후 감정에 따른 음식 레시피 추천

### 주요 기능
- 식재료 인식 모델  <br/> 
  : 카메라로 식재료 촬영 gn 촬영된 이미지를 인식하여 인식한 식재료 값 출력  <br/> 
- 음정 감정 인식 모델  <br/> 
  : 사용자의 음성을 녹음하여 이를 통한 감정 인식 기능  <br/> 
- 레시피 추천 기능  <br/> 
  : 냉장고에 들어있는 식재료 기준 또는 사용자의 감정을 기준으로 음식 레시피 추천  <br/> 
- 음식 유통기한 관리 기능  <br/> 
  : 냉장고 내 식재료의 유통기한 관리 기능 

### 사용 DataSet
🔎 식품의약품안전처 OpenAPI “조리식품의 레시피 DB” 
(https://www.foodsafetykorea.go.kr/api/openApiInfo.do?menu_grp=MENU_GRP31&menu_no=661&show_cnt=10&start_idx=1&svc_no=COOKRCP01)
🔎 Kaggle “Fruits and Vegetables Image Recognition Dataset” + google image search
(https://www.kaggle.com/datasets/kritikseth/fruit-and-vegetable-image-recognition)
🔎 음성 데이터셋
(https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&dataSetSn=263)

### 실행 시 주의사항
해당 Git 안에 있는 SF폴더를 C:/SprintF 폴더에 넣어주세요.
본인 데이터베이스에 SprintF라는 DB를 생성해주시거나 혹은 application.properties 파일의 DB 정보를 본인 것에 맞춰 입력해주세요.

### 라이센스
이 프로젝트는 MIT 라이센스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

---

💻**프로그래밍 언어**
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=openjdk&logoColor=white">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white">

🪛**개발 환경 및 도구**
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white">

🕸️**웹 개발 및 프레임워크**
<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

🌐**테스트 및 데이터베이스**
<img src="https://img.shields.io/badge/selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white">
<img src="https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=mariadb&logoColor=white">
