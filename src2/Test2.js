import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./App.css";

export default function Atable(props) {
  const columns = [
    {
      name: "재료",
      selector: (row) => row.ingredient,
      sortable: true,
      width: "130px",
      center: true
    },
    {
      name: "소비기한",
      selector: (row) => row.date,
      sortable: true,
      width: "150px",
      right: true
    },
    {
      name: "유통기한",
      selector: (row) => row.유통기한,
      sortable: true,
      width: "150px",
      right: true,
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
      style: {}
    },
    cells: {}
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

  const [data, setData] = useState([]);

  return (
    <div className="Btable" style={{ textAlign: "center" }}>
      <DataTable
        title="음식 빨리 처리햇"
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
