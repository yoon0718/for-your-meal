import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";


export default function Atable(props) {
  const columns = [
    {
      name: "재료",
      selector: (row) => row.ingredient,
      sortable: true,
      width: "33%",
      center: true
    },

    {
      name: "소비기한",
      selector: (row) => row.date,
      sortable: true,
      width: "34%",
      center: true
    //   right: true
    },
    {
      name: "삭제",
      cell: (row) => (
        <button onClick={() => handleDelete(row)} style={{
          backgroundColor: '#ff4f42', // '#ff4f42'로 수정
          color: '#ffffff', // '#ffffff'로 수정
          border: 'none', // 문자열 그대로 유지
          borderRadius: '10px', // 문자열 그대로 유지
          cursor: 'pointer', // 문자열 그대로 유지
          fontFamily: 'yg-jalnan', // 문자열 그대로 유지
          fontSize: '12px', // 문자열 그대로 유지
          opacity: '100%', // 문자열 그대로 유지
          padding: '5px 15px'
        }}>삭제</button>
      ),
      width: "33%",
  center: true
    }
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row,
      style: {
        "&:hover": {
          color: "orange",
          cursor: "pointer"
        }
      }
    }
  ];

  const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#ffffff', 
            color: '#000000', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            fontFamily: 'EASTARJET-Medium', 
          },
    },
    cells: {
        style: {
            backgroundColor: '#ffffff', // 일반 셀의 배경색
            color: '#333333', // 일반 셀의 폰트 색상
            fontSize: '14px', // 일반 셀의 폰트 크기
            fontFamily: 'EASTARJET-Medium', // 폰트 종류
            
          },
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost/expiration");
      const jsonData = await response.json();
      setData(jsonData["재료순"]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const handleDelete = (row) => {
    console.log(row)
    axios.post("http://localhost/expiration",row)
    .then(res => {
      window.location.reload();
    })
  };

  const NoDataComponent = () => (
    <div style={{
      width: '100%',
      textAlign: 'center',
      padding: '10px',
      fontSize: '18px',
      backgroundColor: '#ffffff' ,  
      fontFamily: 'EASTARJET-Medium' 
    }}>
      아직 냉장고에 보관된 재료가 없습니다.
    </div>
  );

  return (
    <div className="Atable" style={{ textAlign: "center" }}>
        <p className="Atablefont">현재 냉장고에 보관된 재료는?</p>
      <DataTable
        columns={columns}
        data={data}
        defaultSortFieldId
        pagination
        highlightOnHover
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
        noDataComponent={<NoDataComponent />}
      />
    </div>
  );
  
}
