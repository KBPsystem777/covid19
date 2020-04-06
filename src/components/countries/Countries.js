import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import NumberFormat from "react-number-format";

const covidEndPoint = "https://corona.lmao.ninja/countries?sort=cases";

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
  console.log(data);
  return (
    <div className="container summary-padding">
      <h1 className="text-center country-padding">
        Countries Affected: {data.length + 1}
      </h1>
      <Container className="countries-padding-top">
        {data.map((country, index) => {
          return (
            <Fragment key={index}>
              <div className="jumbotron">
                <Row>
                  <Col xs="6">
                    <img
                      className="flag"
                      src={country.countryInfo.flag}
                      alt={`Flag of ${country.country}`}
                    />
                  </Col>
                  <Col xs="6">
                    <h3>{country.country}</h3>
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

export default PHsummary;
