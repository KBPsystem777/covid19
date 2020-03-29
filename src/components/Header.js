import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-fixed-top">
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <NavbarBrand href="/">🦠 COVID19 Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/ph" onClick={toggle}>
                  Philippines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" onClick={toggle}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.koleenbp.com"
                  onClick={toggle}
                >
                  KBPsystem
                </a>
              </li>
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
