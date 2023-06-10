import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="nav-box">
        <Navbar expand="lg" className=" py-4 px-5">
          <Navbar.Brand href="/">
            <img
              src="https://deshcareer.com/logo/short-logo.png"
              width="200"
              height="83"
              className="d-inline-block align-top"
              alt="Desh Career logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/privacy"
                className="nav-link"
                activeClassName="active"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms"
                className="nav-link"
                activeClassName="active"
              >
                Terms Condition
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/advertise"
                className="nav-link"
                activeClassName="active"
              >
                Advertise
              </NavLink>
            </Nav>
            <a href="/" className="btn btn-danger">
              Join Now
            </a>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
