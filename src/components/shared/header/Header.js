import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../resources/images/logo.png";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import useFirebase from "../../../hooks/useFirebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const userStyle = {
    backgroundColor: "#00A69C",
    color: "white",
    padding: "15px",
    borderRadius: "25px",
  };

  const iconStyle = {
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "50%",
    margin: "2px",
  };

  const fontAwesomeStyle = {
    color: "#00A69C",
  };

  const { user, logOut } = useAuth();

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
              className="mx-2 rounded rounded-circle"
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
              {user.uid ? (
                <>
                  <Nav.Link onClick={logOut}>Log Out</Nav.Link>

                  <Navbar.Text style={userStyle}>
                    <span style={iconStyle}>
                      <FontAwesomeIcon
                        icon={faUserAlt}
                        style={fontAwesomeStyle}
                      ></FontAwesomeIcon>
                    </span>
                    {user.displayName ? user.displayName : user.uid}
                  </Navbar.Text>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
