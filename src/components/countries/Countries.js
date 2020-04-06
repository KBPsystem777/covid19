import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

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
      <h1 className="text-center">Countries Affected: {data.length}</h1>
      <Container className="countries-padding-top">
        {data.map((country, index) => {
          return (
            <Fragment key={index}>
              <div className="jumbotron">
                <Row>
                  <Col xs="6">
                    <img className="flag" src={country.countryInfo.flag} />
                  </Col>
                  <Col xs="6">
                    <h4>{country.country}</h4>
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
