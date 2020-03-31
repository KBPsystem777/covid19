import React, { Fragment, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const covidEndPoint = "https://coronavirus-ph-api.herokuapp.com/cases";

function PHsummary() {
  const [data, setData] = useState([]);

  async function getData() {
    setTimeout(() => {
      fetch(covidEndPoint)
        .then(res => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
  }, []);

  // Get patient's status
  const recovered = data.filter(item => item.status === "Recovered");
  const died = data.filter(item => item.status === "Died");
  const admitted = data.filter(item => item.status === "Admitted");
  const toBeIdentified = data.filter(item => item.status === "TBA");

  const chartSeries = [
    recovered.length,
    died.length,
    admitted.length + toBeIdentified.length
  ];
  const chartOptions = {
    labels: ["Recovered", "Deaths", "PUIs/PUMs"],
    colors: ["#4CAF50", "#FF5722", "#673AB7"],
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    legend: {
      show: true,
      position: "bottom"
    },
    title: {
      text: "Local Status",
      align: "center"
    }
  };

  function Card() {
    return (
      <Fragment>
        <div className="text-center">
          <h5>Recovered: {recovered.length}</h5>
          <h5>Admitted: {admitted.length}</h5>
          <h5>PUI/PUM: {toBeIdentified.length}</h5>
          <h5>Deaths: {died.length}</h5>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="container summary-padding">
      <h1 className="text-center">🦠 Philippines</h1>
      <div>
        <h2 className="ph-title-center">Confirmed Cases: {data.length}</h2>
        <div className="jumbotron">
          <div id="chart" className="donut">
            <Chart options={chartOptions} series={chartSeries} type="donut" />
          </div>
        </div>
        <div className="ph-cases-padding-top">
          {data.map((cases, index) => {
            return (
              <Fragment key={index}>
                <div className="jumbotron">
                  <h4>Case #{index + 1}</h4>
                  <h5>Status: {cases.status}</h5>
                  <p>Age: {cases.age}</p>
                  <p>Gender: {cases.gender}</p>
                  <p>Nationality: {cases.nationality}</p>
                  <p>
                    Travel History Abroad?:{" "}
                    {cases.had_recent_travel_history_abroad}
                  </p>
                  <p>Admitted: {cases.hospital_admitted_to}</p>
                  <p>Info: {cases.other_information}</p>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PHsummary;
