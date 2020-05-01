import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const covidEndPoint = "https://corona.lmao.ninja/v2/countries?sort=cases";

function Countries() {
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
    document.title = `Countries`;
  }, []);

  return (
    <div className="container summary-padding">
      <h1 className="text-center country-padding">
        Countries Affected: {data.length}
      </h1>
      <Container className="countries-padding-top container-fluid">
        {data.map((country, index) => {
          return (
            <Fragment key={index}>
              <div className="jumbotron">
                <Row className="container-fluid">
                  <Col xs="6">
                    <img
                      className="flag"
                      src={country.countryInfo.flag}
                      alt={`Flag of ${country.country}`}
                    />
                  </Col>
                  <Col xs="6">
                    <h5>{country.country}</h5>
                    <p>
                      Cases:{" "}
                      <NumberFormat
                        value={country.cases}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    </p>
                    <p>
                      Recovered:{" "}
                      <NumberFormat
                        value={country.recovered}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    </p>
                    <p>
                      PUIs/PUMs:{" "}
                      <NumberFormat
                        value={country.active}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    </p>
                    <p>
                      Deaths:{" "}
                      <NumberFormat
                        value={country.deaths}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    </p>
                  </Col>
                </Row>
              </div>
            </Fragment>
          );
        })}
      </Container>
    </div>
  );
}

export default Countries;
