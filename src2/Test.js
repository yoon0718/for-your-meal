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
      // center: true
      right: true
    },
    {
      name: "",
      button: true,
      cell: (row) => (
        <button
          onClick={() => handleDelete(row)}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer"
          }}
        >
          삭제
        </button>
      )
    }
  ];

  const handleDelete = async (row) => {
    try {
      console.log(row);
      await axios.delete(`http://10.10.21.89/expiration/`);
      fetchData();
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

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
      const response = await fetch("http://10.10.21.89/expiration");
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

  return (
    <div className="Atable" style={{ textAlign: "center" }}>
      <DataTable
        title="지금 당신의 냉장고는"
        columns={columns}
        data={data}
        defaultSortFieldId
        pagination
        highlightOnHover
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
