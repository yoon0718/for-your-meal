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
      name: "삭제",
      cell: (row) => (
        <button onClick={() => handleDelete(row)} style={{
          backgroundColor: '#ff4f42',
          color: '#ffffff', // '#ffffff'로 수정
          border: 'none', // 문자열 그대로 유지
          borderRadius: '10px', // 문자열 그대로 유지
          cursor: 'pointer', // 문자열 그대로 유지
          fontSize: '1.8vh', // 문자열 그대로 유지
          opacity: '100%', // 문자열 그대로 유지
          padding: '1vh 1vw'
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
            fontSize: '2.5vh', 
            fontWeight: 'bold',
          },
    },
    cells: {
        style: {
            fontSize: '2vh',
          },
    rows: {
      style: {
        "&:hover": {
          backgroundColor: "lightgrey",
          color: "orange !important",
          cursor: "pointer"
        }
      }
    }
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
    axios.post("http://localhost/expiration", row)
    .then((res) => {
      props.onRefreshData();
      fetchData();
    })
  }

  const NoDataComponent = () => (
    <div style={{
      width: '100%',
      textAlign: 'center',
      padding: '5%',
      fontSize: '1.7vw',
      backgroundColor: '#ffffff'
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
        paginationPerPage={8}
        paginationComponentOptions={customStyles}
        highlightOnHover
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
        noDataComponent={<NoDataComponent />}
      />
    </div>
  );
  
}
