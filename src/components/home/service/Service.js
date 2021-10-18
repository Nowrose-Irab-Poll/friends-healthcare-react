import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {
    id,
    serviceName,
    fullServiceName,
    description,
    descriptionDetail,
    photoLink,
  } = service;

  const cardStyle = {
    backgroundColor: "#00A69C",
    color: "white",
  };

  const linkToDetails = `service/${id}`;
  return (
    <Col>
      <Card className="h-100 m-3" style={cardStyle}>
        <Card.Img
          variant="top"
          src={photoLink}
          className="rounded-circle p-5"
        />
        <Card.Body>
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={linkToDetails}>
            <Button variant="danger">Explore {serviceName}</Button>{" "}
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
