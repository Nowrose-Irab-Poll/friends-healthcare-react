import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../resources/images/banner.png";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    height: "50vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
  };

  const greenStyle = {
    color: "#00A69C",
  };

  const redStyle = {
    color: "#F17081",
  };
  return (
    <div style={bannerStyle} id="home">
      <Container>
        <Row>
          <Col>
            <h1 style={greenStyle}>Your Health</h1>
          </Col>
          <Col></Col>
          <Col>
            <h1 style={redStyle}>Our Priority</h1>
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default Banner;
