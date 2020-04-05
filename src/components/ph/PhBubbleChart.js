import React, { useEffect, useState } from "react";
//import Chart from "react-apexcharts";

const covidEndPoint = "https://coronavirus-ph-api.herokuapp.com/cases";

function PhChart() {
  const [data, setData] = useState([]);

  async function getData() {
    setTimeout(() => {
      fetch(covidEndPoint)
        .then((res) => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
  }, []);

  // new
  const dataByLocation = data.reduce((h, { resident_of, case_no }) => {
    return Object.assign(h, {
      [resident_of]: (h[resident_of] || []).concat({ case_no }),
    });
  }, {});

  return (
    <div className="container-fluid">
      <h1>{dataByLocation.length}</h1>
    </div>
  );
}

export default PhChart;
