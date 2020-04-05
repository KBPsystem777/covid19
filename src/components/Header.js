import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler } from "reactstrap";

import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-fixed-top">
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <Link className="navbar-brand nav-link" to={"/"}>
          <span role="img" aria-label="biohazard">
            ☣️
          </span>{" "}
          COVID19 Tracker
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
            <ul className="navbar-nav mr-auto">
              <Link className="nav-link" to={"/ph"} onClick={toggle}>
                Philippines
              </Link>
              <Link className="nav-link" onClick={toggle} to={"/about"}>
                About
              </Link>
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
