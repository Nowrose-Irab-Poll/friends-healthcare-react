import React, { useEffect, useState } from "react";
import Service from "../service/Service";
import { CardGroup, Row } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakedb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const sectionStyle = {
    backgroundColor: "#E8E8E8",
  };

  return (
    <div id="services" style={sectionStyle} className="p-5 m-5">
      <h2>Our Services</h2>
      <CardGroup>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
};

export default Services;
