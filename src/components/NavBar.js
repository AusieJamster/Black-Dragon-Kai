import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import NavData from "../data/NavData";
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
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <CustomNavDropDown title="About Us" buttons={NavData.ABOUTUS} />
            <CustomNavDropDown title="Events" buttons={NavData.EVENTS} />
            <CustomNavDropDown title="Programs" buttons={NavData.PROGRAMS} />
            <CustomNavDropDown title="Resources" buttons={NavData.RESOURCES} />
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="d-xl-inline d-none">
          Champions are not born, but forged
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
