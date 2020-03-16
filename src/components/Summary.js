import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

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
    <div className="container summary-padding">
      <h1 className="text-center">🦠 COVID19 Global Tracker</h1>
      <div className="jumbotron">
        <div className="jumbotron">
          <ul className="numbers">
            <li>
              Cases:
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
