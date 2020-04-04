import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Chart from "react-apexcharts";
import "./app.css";

const covidEndPointAll = "https://coronavirus-19-api.herokuapp.com/all";

function Summary() {
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
    Number(data.cases),
    Number(data.deaths),
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
    <div className="container summary-padding">
      <h1 className="text-center">🦠 COVID19 Global</h1>
      <div className="sum-margin">
        <div id="chart" className="donut">
          <Chart options={chartOptions} series={chartSeries} type="donut" />
        </div>
        <div>
          <ul className="numbers">
            <li>
              Cases:{" "}
              <NumberFormat
                value={data.cases}
                thousandSeparator={true}
                displayType={"text"}
              />
            </li>
            <li>
              Deaths:
              <NumberFormat
                value={data.deaths}
                thousandSeparator={true}
                displayType={"text"}
              />
            </li>
            <li>
              Recovered:
              <NumberFormat
                value={data.recovered}
                thousandSeparator={true}
                displayType={"text"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Summary;
