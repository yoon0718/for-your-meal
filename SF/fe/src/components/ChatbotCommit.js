import axios from "axios";
import { useEffect, useState } from "react";
import "../components/css/MainCommit.css";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";

function ChatbotCommit() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  //페이지네이션 기능
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.slice(firstItemIndex, lastItemIndex);

  const type = sessionStorage.getItem("요리종류");
  const way = sessionStorage.getItem("조리방법");
  const ingre = sessionStorage.getItem("재료");
  const postingdata = { 요리종류: type, 조리방법: way, 재료: ingre };
  const setName = (label) => {
    sessionStorage.setItem("메뉴명", label);
    navigate("/main/ResultCook");
  };
  const backhome = () => {
    navigate("/main");
  }
  useEffect(() => {
    axios.post("http://10.10.21.89/category", postingdata).then((res) => {
    setData(res.data);
    });
  },[])
  

  if (data && data.length >= 1) {
    return (
      <div className="CategoryFood">
        <div className="food-container">
          {currentItems?.map((menu, index) => (
            <div
              key={index}
              className="food-item"
              onClick={() => setName(menu.메뉴명)}
            >
              <div className="food-item-img">
                <img src={process.env.PUBLIC_URL + "/images/" + menu.이미지경로} alt={`Food ${index + 1}`} />
              </div>
              <div className="commit-food-label">
                {menu.메뉴명}
              </div>
            </div>
          ))}
        </div>
        {data && (
        <div className="pagination-container">
          {" "}
          {/* 클래스 추가 */}
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            prevPageText="<"
            nextPageText=">"
            onChange={handlePageChange}
          />
        </div>
      )}
      </div>
    );
  } else if (data && data.length === 0) { 
    return (
      <div className="CategoryFood">
        <div className="no-data">
          검색된 결과가 없습니다. <br/>다른 카테고리를 선택해보시는게 어떤가요?
          <button className="no-data-btn" onClick={backhome}>뒤로가기</button>
        </div>
        
      </div>
    );
  } else {
    return (
      <div className="CategoryFood">
        <div className="food-container">결과를 가져오는 중이에요!</div>
      </div>
    );
  }
}

export default ChatbotCommit;