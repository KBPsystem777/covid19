import React from "react";
import "./components/app.css";
import Summary from "./components/Summary";
import Header from "./components/Header";
import PHsummary from "./components/ph/PHsummary";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Summary} />
        <Route path="/ph" component={PHsummary} />
      </Switch>
    </Router>
  );
}

export default App;
