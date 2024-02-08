import React, { useState, useEffect } from "react";

const MyTable = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });
  const [hoveredCell, setHoveredCell] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://10.10.21.89/data");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const handleMouseEnter = (rowIndex, columnIndex) => {
    setHoveredCell({ rowIndex, columnIndex });
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              cursor: "pointer",
              background: hoveredCell?.columnIndex === 0 ? "lightgray" : "white"
            }}
            onClick={() => sortData("ingredient")}
            onMouseEnter={() => handleMouseEnter(-1, 0)}
            onMouseLeave={handleMouseLeave}
          >
            재료
            {sortConfig.key === "ingredient" && (
              <span>{sortConfig.direction === "ascending" ? " ▲" : " ▼"}</span>
            )}
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              cursor: "pointer",
              background: hoveredCell?.columnIndex === 1 ? "lightgray" : "white"
            }}
            onClick={() => sortData("date")}
            onMouseEnter={() => handleMouseEnter(-1, 1)}
            onMouseLeave={handleMouseLeave}
          >
            소비기한
            {sortConfig.key === "date" && (
              <span>{sortConfig.direction === "ascending" ? " ▲" : " ▼"}</span>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td
              style={{
                border: "1px solid black",
                padding: "8px",
                background:
                  hoveredCell?.rowIndex === rowIndex &&
                  hoveredCell?.columnIndex === 0
                    ? "lightblue"
                    : "white"
              }}
              onMouseEnter={() => handleMouseEnter(rowIndex, 0)}
              onMouseLeave={handleMouseLeave}
            >
              {row.ingredient}
            </td>
            <td
              style={{
                border: "1px solid black",
                padding: "8px",
                background:
                  hoveredCell?.rowIndex === rowIndex &&
                  hoveredCell?.columnIndex === 1
                    ? "lightblue"
                    : "white"
              }}
              onMouseEnter={() => handleMouseEnter(rowIndex, 1)}
              onMouseLeave={handleMouseLeave}
            >
              {row.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
