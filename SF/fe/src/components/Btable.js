import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";


export default function Btable(props) {
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
    },
    {
      name: "유통기한",
      selector: (row) => row.유통기한,
      sortable: true,
      width: "33%",
      center: true,
      cell: (row) => (
        <div
          style={{
            color:
              row.유통기한 === "지남"
                ? "#1F2544"
                : row.유통기한 === "임박"
                ? "red"
                : "inherit"
          }}
        >
          {row.유통기한}
        </div>
      )
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
    titlecell:{
        style:{
          backgroundColor: '#d4ba18'  
        }
    },

    headCells: {
        style: {
            backgroundColor: '#F64646', 
            color: '#ffffff', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            fontFamily: 'EASTARJET-Medium', 
          },
    },
    cells: {
        style: {
            backgroundColor: '#FFED93', // 일반 셀의 배경색
            color: '#333333', // 일반 셀의 폰트 색상
            fontSize: '14px', // 일반 셀의 폰트 크기
            fontFamily: 'EASTARJET-Medium', // 폰트 종류
     },
    }
  };
  

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost/expiration");
      const jsonData = response.data;
      setData(jsonData["임박순"]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [props.refreshData]); // refreshData 값이 변경될 때마다 fetchData를 호출합니다.

  const [data, setData] = useState([]);

  return (
    <div className="Btable" style={{ textAlign: "center" }}>
        <p className="Btablefont">유통기한 임박 재료</p>
      <DataTable
        columns={columns}
        data={data}
        defaultSortFieldId
        highlightOnHover
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
