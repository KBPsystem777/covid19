import React from "react";

function About() {
  return (
    <div className="container-fluid" id="about-padding-top">
      <div className="jumbotron">
        <h1>COVID2019 Tracker</h1>
        <p>
          This project focuses in disseminating public information about COVID19
          cases in the Philippines and global case summary.
        </p>
        <div>
          <h3>Data Sources</h3>
          <p>Data is being fetched from the following sources:</p>
          <li>https://coronavirus-ph-api.now.sh</li>
          <li>
            https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_the_Philippines
          </li>
        </div>
        <p className="text-center">
          This is the bomb developed by{" "}
          <a href="https://koleenbp.com">KBPsystem</a>
        </p>
      </div>
    </div>
  );
}

export default About;
