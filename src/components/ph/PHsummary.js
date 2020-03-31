import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
const covidEndPoint = "https://coronavirus-ph-api.now.sh/cases";

function PHsummary() {
  const [data, setData] = useState(["LOADING..."]);

  async function getData() {
    setTimeout(() => {
      axios
        .get(covidEndPoint)
        .then(res => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
    setData(data);
  }, []);

  // Get patient's status
  const recovered = data.filter(item => item.status === "Recovered");
  const died = data.filter(item => item.status === "Died");
  const admitted = data.filter(item => item.status === "Admitted");
  const toBeIdentified = data.filter(item => item.status === "TBA");

  function Card() {
    return (
      <div className="card bg-light mb-3" id="send-to-back">
        <div className="card-header">
          <h4>Local Status</h4>
        </div>
        <div className="card-body">
          <h5 className="card-text">Recovered: {recovered.length}</h5>
          <h5 className="card-text">Admitted: {admitted.length}</h5>
          <h5 className="card-text">PUI/PUM: {toBeIdentified.length}</h5>
          <h5 className="card-text">Deaths: {died.length}</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="container summary-padding">
      <h1 className="text-center">🦠 Philippines</h1>
      <div>
        <h2 className="ph-title-center">Confirmed Cases: {data.length}</h2>
        <div className="jumbotron">
          <Card />
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
