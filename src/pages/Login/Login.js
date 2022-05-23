import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    
    return (
        <div className="container mb-5">
      <div className="login-form">
        <h3 className="text-center mt-5 mb-3 fs-2 text-secondary fw-bold">
          Login
        </h3>
        <div className="w-50 mx-auto  border border-secondary  p-5 rounded">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
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
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Text>
                <p>{}</p>
                <p>{}</p>
                <p>
                  Don't have account?
                  <Link to={"/signUp"} className="text-decoration-none">
                    Sign Up
                  </Link>
                </p>
              </Form.Text>
            </Form.Group>
            <Button
              className="mb-3 d-block mx-auto"
              variant="primary"
              type="submit"
            >
              Login
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

export default Login;