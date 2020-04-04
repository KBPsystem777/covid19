import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import "./app.css";

import Loadable from "react-loadable";

const covidEndPointAll = "https://coronavirus-19-api.herokuapp.com/all";

const LoadableSumChart = Loadable({
  loader: () => import("./SummaryChart"),
  loading() {
    return <div>Loading Data...</div>;
  },
});

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

  return (
    <div className="container summary-padding">
      <h1 className="text-center">🦠 COVID19 Global</h1>
      <div className="sum-margin">
        <LoadableSumChart />
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
