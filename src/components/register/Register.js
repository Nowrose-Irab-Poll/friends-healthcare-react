import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>This is Register Page</h2>
      <br />
      <p>
        Already have an Account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
