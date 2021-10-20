import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const [service, setService] = useState({});

  const { serviceId } = useParams();

  useEffect(() => {
    fetch("../fakedb.json")
      .then((res) => res.json())
      .then((data) => {
        const d = data.find((s) => s.id === serviceId);
        setService(d);
      });
  }, []);

  const sectionStyle = {
    backgroundColor: "#E8E8E8",
  };

  const {
    id,
    serviceName,
    fullServiceName,
    description,
    descriptionDetail,
    photoLink,
  } = service;

  return (
    <div
      className="d-md-flex m-md-5 p-md-5 justify-content-center align-items-center text-center"
      style={sectionStyle}
    >
      <div className="m-4 p-4 w-50 d-flex justify-content-center align-items-center">
        <Image src={photoLink} rounded fluid></Image>
      </div>
      <div className="m-1 p-4 w-50">
        <h1>{fullServiceName}</h1>
        <p>{descriptionDetail}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
