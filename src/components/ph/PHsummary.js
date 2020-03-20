import React, { Fragment, useEffect, useState } from "react";
//import NumberFormat from "react-number-format";

const covidEndPoint = "https://coronavirus-ph-api.now.sh/cases";

function PHsummary() {
  const [data, setData] = useState("Loading...");

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
  }, []);
  console.log(data);

  return (
    <div className="container summary-padding">
      <h1 className="text-center">🦠 COVID19 | Philippines</h1>
      <div className="jumbotron">
        <div className="jumbotron">
          <h3>Total Cases Count: {data.length}</h3>
          <ul>{data.status}</ul>
        </div>
      </div>
    </div>
  );
}

export default PHsummary;
