import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-fixed-top">
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <Link to={"/"}>
          <NavbarBrand>🦠 COVID19 Tracker</NavbarBrand>
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
              <Link
                className="nav-link"
                onClick={toggle}
                href="https://www.koleenbp.com"
              >
                KBPsystem
              </Link>
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
