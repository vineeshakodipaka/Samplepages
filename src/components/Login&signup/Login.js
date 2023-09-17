import React from "react";
import "./Login&signup.css";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="logincls text-center">
      <h3 className="fs-2 elite mt-5">Elite</h3>
      <h4>E n t e r p r i s e s</h4>
      <Row className="mt-5 pt-lg-5">
        <h3 className="loginaccount">Login To Your Account</h3>
        <Form className="loginform">
          <Row className="justify-content-center mt-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              {/* <Form.Label>Last name</Form.Label> */}
              <Form.Control
                required
                type="email"
                className="inputgrp"
                placeholder="Email"
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-center mt-4">
            <Form.Group
              as={Col}
              md="4"
              className="inputgrp"
              controlId="validationCustom02"
            >
              {/* <Form.Label>Last name</Form.Label> */}
              <Form.Control required type="password" placeholder="password" />
            </Form.Group>
          </Row>
          <Row className="mt-lg-5 pt-3">
            <Link to="/forgotpassword" className="forgotlink fw-bold">
              Forgot Your Password?
            </Link>
         
            <Link to="/signup" className="signup fw-bold">
              Signup
            </Link>
          </Row>
          <button className="rounded-4 p-3 px-5 mt-5">Login</button>
        </Form>
      </Row>
    </div>
  );
};

export default Login;
