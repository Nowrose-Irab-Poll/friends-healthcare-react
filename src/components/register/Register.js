import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { ButtonGroup, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Register = () => {
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

  const { user, signInUsingGoogle, registerWithEmailAndPassword, error } =
    useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [problem, setProblem] = useState("");

  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInUsingGoogle();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReEnterPasswordChange = (e) => {
    setRePassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setProblem("Password must be more than 6 characters");
      return;
    }
    if (password === rePassword) {
      registerWithEmailAndPassword(email, password);
      history.push("/home");
    } else {
      setProblem("Password did not match");
    }
  };

  return (
    <div style={sectionStyle}>
      <div style={loginStyle}>
        {user.uid ? (
          <h2>
            Logged in as: {user.displayName ? user.displayName : user.uid}
          </h2>
        ) : (
          <h2>User Registration</h2>
        )}
        <br />
        <div>
          <Form onSubmit={handleRegistration}>
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
            <FloatingLabel
              controlId="floatingPassword"
              label="Re-enter Password"
              className="mt-4"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={handleReEnterPasswordChange}
              />
            </FloatingLabel>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-success mt-3"
            >
              Register
            </Button>
          </Form>
          {problem && <p className="text-danger m-4">{problem}</p>}
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
        <p>
          Already have an Account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
