import React, { useState } from "react";
import "./css/Expirationdate.css";

import Atable from "./Atable";
import Btable from "./Btable";

function Expirationdate() {
  const [refreshData, setRefreshData] = useState(false); // fetchData를 호출하기 위한 상태 변수입니다.

  const handleDataRefresh = () => {
    setRefreshData((prevState) => !prevState); // 상태를 토글하여 fetchData를 호출합니다.
  };

  return (
    <main className="contents">
      <div className="ExpFoodresult">
        <div className="Expfood-1">
          <Atable onRefreshData={handleDataRefresh} refreshData={refreshData} />
        </div>
        <div className="Expfood-2">
          <Btable onRefreshData={handleDataRefresh} refreshData={refreshData} />
        </div>
      </div>
    </main>
  );
}

export default Expirationdate;
