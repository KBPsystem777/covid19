import React, { Fragment, useEffect, useState } from "react";
//import Example1 from "./test";
//import NumberFormat from "react-number-format";

const covidEndPoint = "https://coronavirus-ph-api.now.sh/cases";

function PHsummary() {
  const [data, setData] = useState(["LOADING..."]);

  async function getData() {
    setTimeout(() => {
      fetch(covidEndPoint)
        .then(res => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
    setData(data);
  }, []);

  return (
    <div className="container summary-padding">
      <h1 className="text-center">🦠 Philippines</h1>
      <div>
        <h2 className="ph-title-center">Confirmed Cases: {data.length}</h2>
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
