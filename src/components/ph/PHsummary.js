import React, { Fragment, useEffect, useState } from "react";
//import NumberFormat from "react-number-format";

const covidEndPoint = "https://coronavirus-ph-api.now.sh/cases";

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
    console.log(data);
    setData(data);
  }, []);

  return (
    <div className="container summary-padding">
      <h1 className="text-center">🦠 COVID19 | Philippines</h1>
      <div className="row">
        <h2>Total Cases Count: {data.length}</h2>
      </div>
      <div className="jumbotron">
        <ul>
          {data.map((cases, index) => {
            return (
              <Fragment>
                <div key={cases.length + 2}>
                  <h4>Case #{index + 1}</h4>
                  <h5>Status: {cases.status}</h5>
                  <p>Admitted: {cases.hospital_admitted_to}</p>
                </div>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PHsummary;
