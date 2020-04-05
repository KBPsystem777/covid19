import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import Loadable from "react-loadable";

const covidEndPoint = "https://coronavirus-ph-api.herokuapp.com/cases";

const LoadablePhChart = Loadable({
  loader: () => import("./PhChart"),
  loading() {
    return (
      <Loader
        type="Watch"
        color="#772953"
        height={100}
        width={100}
        timeout={5000}
        className="text-center"
      />
    );
  },
});

function PHsummary() {
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

  return (
    <div className="container summary-padding">
      <h1 className="text-center">🦠 Philippines</h1>
      <div>
        <h2 className="ph-title-center">Confirmed Cases: {data.length}</h2>
        <div className="ph-padding-top">
          <LoadablePhChart />
        </div>
      </div>
    </div>
  );
}

export default PHsummary;
