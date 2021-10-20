import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const loginStyle = {
    backgroundColor: "#E8E8E8",
    margin: "40px",
    padding: "50px",
    width: "50%",
  };

  const logoStyle = {
    backgroundColor: "#00A669",
    color: "white",
    padding: "5px",
    fontSize: "40px",
    cursor: "hand",
  };

  const { user, signInUsingGoogle, loginWithEmailAndPassword, error } =
    useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInUsingGoogle();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={sectionStyle}>
      <div style={loginStyle}>
        {user.uid ? (
          <h2>
            Logged in as: {user.displayName ? user.displayName : user.uid}
          </h2>
        ) : (
          <h2>User Login</h2>
        )}
        <br />
        <div>
          <Form onSubmit={handleLogin}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onBlur={handleEmailChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={handlePasswordChange}
              />
            </FloatingLabel>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-success mt-3"
            >
              Login
            </Button>
          </Form>
          {error && <p className="text-danger m-4">{error}</p>}
        </div>
        <br />
        <p>Other Sign in Methods</p>
        <FontAwesomeIcon
          icon={faGoogle}
          onClick={handleGoogleSignIn}
          style={logoStyle}
        ></FontAwesomeIcon>
        <br />
        <p className="mt-3">
          Don't have an Account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
