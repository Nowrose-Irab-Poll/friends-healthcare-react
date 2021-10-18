import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../resources/images/logo.png";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

const Header = () => {
  const hashLinkStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              src={logo}
              alt=""
              height="50px"
              width="50px"
              className="mx-1"
            />
            Friends HealthCare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link
                as={NavHashLink}
                smooth
                to="/home#services"
                activeClassName="selected"
              >
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link as={Link} to="/appointment">
                Appoinment
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
