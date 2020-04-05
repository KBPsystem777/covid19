import React, { Fragment, useEffect, useState } from "react";
import Chart from "react-apexcharts";

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

  // Get patient's status
  const recovered = data.filter((item) => item.status === "Recovered");
  const died = data.filter((item) => item.status === "Died");
  const admitted = data.filter((item) => item.status === "Admitted");
  const toBeIdentified = data.filter((item) => item.status === "TBA");

  const chartSeries = [
    recovered.length,
    died.length,
    admitted.length + toBeIdentified.length,
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
      text: "Local Status",
      align: "center",
    },
  };

  return (
    <div className="container-fluid">
      <div id="chart" className="donut">
        <Chart options={chartOptions} series={chartSeries} type="donut" />
      </div>
      <div className="container">
        {data.map((cases, index) => {
          return (
            <Fragment key={index}>
              <div className="jumbotron">
                <h4>Case #{index + 1}</h4>
                <h5>Status: {cases.status}</h5>
                <p>Age: {cases.age}</p>
                <p>Gender: {cases.gender}</p>
                <p>Nationality: {cases.nationality}</p>
                <p>Travel History Abroad? {cases.travel_history}</p>
                <p>Admitted: {cases.hospital_admitted_to}</p>
                <p>Address: {cases.resident_of}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default PhChart;
