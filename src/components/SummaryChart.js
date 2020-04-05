import React, { useState, useEffect } from "react";

import Chart from "react-apexcharts";
import "./app.css";

const covidEndPointAll = "https://corona.lmao.ninja/all";

function SummaryChart() {
  const [data, setData] = useState([]);

  async function getData() {
    setTimeout(() => {
      fetch(covidEndPointAll)
        .then((res) => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
  }, []);

  const chartSeries = [
    Number(data.recovered),
    Number(data.deaths),
    Number(data.active),
  ];

  const chartOptions = {
    labels: ["Recovered", "Deaths", "PUIs/PUMs"],
    colors: ["#4CAF50", "#FF5722", "#673AB7"],
    responsive: [
      {
        breakpoint: 1000,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      show: true,
      position: "bottom",
    },
    title: {
      text: "Global Status",
      align: "center",
    },
  };

  return (
    <div id="chart" className="donut">
      <Chart options={chartOptions} series={chartSeries} type="donut" />
    </div>
  );
}

export default SummaryChart;
