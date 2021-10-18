import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>This is Login Page</h2>
      <br />
      <p>
        Don't have an Account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
