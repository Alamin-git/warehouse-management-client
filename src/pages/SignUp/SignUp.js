import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="container mb-5">
      <div className="login-form">
        <h3 className="text-center mt-5 mb-3 fs-2 text-secondary fw-bold">
          Sign Up
        </h3>
        <div className="w-50 mx-auto  border border-secondary p-5 rounded">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Text>
                {/* <p>{loadingMassage}</p> */}
                {/* <p>{errorMassage}</p> */}
                <p>
                  Already have an account?
                  <Link to={"/login"} className="text-decoration-none ml-2">
                    Login
                  </Link>
                </p>
              </Form.Text>
            </Form.Group>
            <Button
              className="mb-3 d-block mx-auto"
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
          <p className="login-or">or</p>
          <div className="g-sign-btn">
          <Button variant="fs-3 btn text-white product-btn">Login with Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
