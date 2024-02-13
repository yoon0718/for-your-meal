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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost/expiration/`);
      fetchData();
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  const [data, setData] = useState([]);

  const NoDataComponent = () => (
    <div style={{
      width: '100%',
      textAlign: 'center',
      padding: '10px',
      fontSize: '18px',
      backgroundColor: '#FFED93' ,  
      fontFamily: 'EASTARJET-Medium' 
    }}>
      아직 유통기한이 임박한 재료가 없습니다.
    </div>
  );
  

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
        noDataComponent={<NoDataComponent />}
      />
    </div>
  );
}
