import axios from "axios";
import { useState } from "react";
import "../components/css/MainCommit2.css";
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
  axios.post("http://localhost/category", postingdata).then((res) => {
    setData(res.data);
  });
  if (data != null) {
    return (
      <main className="commit_contents">
        <div className="CategoryFood">
          <div className="food-container">
            {currentItems?.map((menu, index) => (
              <div
                key={index}
                className="food-item"
                onClick={() => setName(menu.메뉴명)}
              >
                <img src={menu.이미지경로} alt={`Food ${index + 1}`} />
                <div className="food-label">
                  <div>{menu.메뉴명}</div>
                </div>
              </div>
            ))}
          </div>
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
              prevPageText="‹"
              nextPageText="›"
              onChange={handlePageChange}
            />
          </div>
        )}
      </main>
    );
  } else {
    return (
      <main className="contents">
        <div className="CategoryFood">
          <div className="food-container">결과를 가져오는 중이에요!</div>
        </div>
      </main>
    );
  }
}

export default ChatbotCommit;
