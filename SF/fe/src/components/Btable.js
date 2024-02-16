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
        backgroundColor: "lightgrey !important", // !important를 사용하여 스타일을 강제 적용
        color: "orange !important",
        cursor: "pointer"
      }
    }
    }
    }
  };
  

  const fetchData = async () => {
    try {
      const response = await axios.get("http://10.10.21.89/expiration");
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
  }, [props.refreshData]);

  const [data, setData] = useState([]);

  const NoDataComponent = () => (
    <div style={{
      width: '100%',
      textAlign: 'center',
      padding: '5%',
      fontSize: '1.7vw',
      backgroundColor: '#ffffff'
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
        pagination
        paginationPerPage={8}
        highlightOnHover
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
        noDataComponent={<NoDataComponent />}
      />
    </div>
  );
}
