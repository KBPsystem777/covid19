import React, { useState, useEffect } from "react";

const covidEndPointAll = "https://coronavirus-19-api.herokuapp.com/all";

//const covidEndPointCountries ="https://coronavirus-19-api.herokuapp.com/countries";

function App() {
  const [data, setData] = useState("Loading...");

  async function getData() {
    fetch(covidEndPointAll)
      .then(res => res.json())
      .then(setData);
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div>
      <ul>
        <li>Cases: {data.cases}</li>
        <li>Deaths: {data.deaths}</li>
        <li>Recovered: {data.recovered}</li>
      </ul>
    </div>
  );
}

export default App;
