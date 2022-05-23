import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  let errorMassage;
  let loadingMassage;

  if (user || user1) {
    navigate(from, { replace: true });
  }
  if (loading || loading1) {
    loadingMassage = <p>Loading...</p>;
  }
  if (error || error1) {
    errorMassage = (
      <p className="text-danger">
        Error: {error?.message.slice(17, -2)} {error1?.message.slice(17, -2)}{" "}
      </p>
    );
  }

  const handelLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    signInWithEmailAndPassword(email, password);
    toast("User Login ...");
  };

  return (
    <div className="container mb-5">
      <div className="login-form">
        <h3 className="text-center mt-5 mb-3 fs-2 text-secondary fw-bold">
          Login
        </h3>
        <div className="w-50 mx-auto  border border-secondary  p-5 rounded">
          <Form onSubmit={handelLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
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
                ref={passRef}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Text>
                <p>{loadingMassage}</p>
                <p>{errorMassage}</p>
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
            <Button
              onClick={() => signInWithGoogle()}
              variant="fs-3 btn text-white product-btn"
            >
              Login with Google
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
