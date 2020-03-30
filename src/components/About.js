import React from "react";

function About() {
  return (
    <div className="container-fluid" id="about-padding-top">
      <div className="jumbotron responsive-fluid">
        <h1 className="text-center">COVID2019 Tracker</h1>
        <p>
          This project focuses in disseminating public information about COVID19
          cases in the Philippines and global case summary.
        </p>
        <div>
          <h3>Data Sources</h3>
          <p>Data is being fetched from the following sources:</p>
          <ul>
            <li>https://coronavirus-ph-api.now.sh</li>
            <li>
              <a href="https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_the_Philippines">
                COVID19 in the Philippines
              </a>
            </li>
          </ul>
          <br />
        </div>
        <h4>Contribute</h4>
        <li>
          <a href="https://github.com/kbpsystem777/covid19">GitHub</a>
        </li>
        <li>
          Any other suggestions/questions, send email to{" "}
          <a href="mailto:koleen.bp@outlook.com">koleen.bp@outlook.com</a>
        </li>
      </div>
      <p className="text-center">
        This is the <span role="img">💣</span>developed by{" "}
        <a href="https://koleenbp.com">KBPsystem - 2020</a>
      </p>
    </div>
  );
}

export default About;
