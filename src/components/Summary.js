import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "./app.css";

import Loadable from "react-loadable";

const covidEndPointAll = "https://corona.lmao.ninja/v2/all";

const LoadableSumChart = Loadable({
  loader: () => import("./SummaryChart"),
  loading() {
    return <div>Loading Data...</div>;
  }
});

function Summary() {
  const [data, setData] = useState([]);

  async function getData() {
    setTimeout(() => {
      fetch(covidEndPointAll)
        .then(res => res.json())
        .then(setData);
    }, 100);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid summary-padding">
      <h1 className="text-center">COVID19 Global</h1>
      <div className="sum-margin">
        <LoadableSumChart />
      </div>
      <Row className="jumbotron">
        <Col sm="4">
          <Container>
            <div className="card border-light mb-3">
              <div className="card-header">Active Cases</div>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <NumberFormat
                    value={data.active}
                    thousandSeparator={true}
                    displayType={"text"}
                  />
                </p>
              </div>
            </div>
          </Container>
        </Col>
        <Col xs="6" sm="4">
          <Container>
            <div className="card border-light mb-3">
              <div className="card-header">
                <Link to="/countries">Affected Countries</Link>
              </div>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <NumberFormat
                    value={data.affectedCountries}
                    thousandSeparator={true}
                    displayType={"text"}
                  />
                </p>
              </div>
            </div>
          </Container>
        </Col>
        <Col xs="6" sm="4">
          <Container>
            <div className="card border-light mb-3">
              <div className="card-header">People Healed</div>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <NumberFormat
                    value={data.recovered}
                    thousandSeparator={true}
                    displayType={"text"}
                  />
                </p>
              </div>
            </div>
          </Container>
        </Col>
        <Col sm="4">
          <Container>
            <div className="card border-light mb-3">
              <div className="card-header">Deaths</div>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <NumberFormat
                    value={data.deaths}
                    thousandSeparator={true}
                    displayType={"text"}
                  />
                </p>
              </div>
            </div>
          </Container>
        </Col>
        <Col xs="6" sm="4">
          <Container>
            <div className="card border-light mb-3">
              <div className="card-header">Today's Cases</div>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <NumberFormat
                    value={data.todayCases}
                    thousandSeparator={true}
                    displayType={"text"}
                  />
                </p>
              </div>
            </div>
          </Container>
        </Col>
        <Col xs="6" sm="4">
          <Container>
            <div className="card border-light mb-3">
              <div className="card-header">Today's Deaths</div>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <NumberFormat
                    value={data.todayDeaths}
                    thousandSeparator={true}
                    displayType={"text"}
                  />
                </p>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Summary;
