import React from "react";
import "./components/app.css";
import Summary from "./components/Summary";
import Header from "./components/Header";
import PHsummary from "./components/ph/PHsummary";
import About from "./components/About";
import Countries from './components/countries/Countries'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Summary} />
        <Route path="/ph" component={PHsummary} />
        <Route path="/about" component={About} />
        <Route path="/countries" component={Countries} />
      </Switch>
    </Router>
  );
}

export default App;
