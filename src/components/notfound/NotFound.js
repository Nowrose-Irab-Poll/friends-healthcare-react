import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-20173.jpg"
        alt="404-not-found"
      />
      <br />
      <Link to="/home">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
