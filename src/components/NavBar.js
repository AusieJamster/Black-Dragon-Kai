import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import NavData from "../Data/NavData";
import CustomNavDropDown from "./common/CustomNavDropDown";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand">
            <img
              src="/images/bdklogo.png"
              width="40px"
              height="30px"
              alt="bdk logo"
              style={{ paddingRight: "10px" }}
            />
            Black Dragon Kai
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-nav" />
        <Navbar.Collapse id="header-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <CustomNavDropDown title="About Us" buttons={NavData.ABOUTUS} />
            <CustomNavDropDown
              title="Adult Programs"
              buttons={NavData.ADULT_PROGRAMS}
            />
            <CustomNavDropDown
              title="Junior Programs"
              buttons={NavData.JUNIOR_PROGRAMS}
            />
            <CustomNavDropDown title="Resources" buttons={NavData.RESOURCES} />
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="d-xl-inline d-none">
          Offering Martial Arts instruction since 1993
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
