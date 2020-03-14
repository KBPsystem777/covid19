import React, { useState, useEffect } from "react";
const covidEndPointAll = "https://coronavirus-19-api.herokuapp.com/all";

function Summary() {
  const [data, setData] = useState("Loading...");

  async function getData() {
    setTimeout(() => {
      fetch(covidEndPointAll)
        .then(res => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">COVID19 Global Tracker</h1>
        <div className="jumbotron">
          <ul className="numbers">
            <li>Cases: {data.cases}</li>
            <li>Deaths: {data.deaths}</li>
            <li>Recovered: {data.recovered}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Summary;
