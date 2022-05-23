import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mt-0 mb-0 pt-0 pb-0">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-name me-5">
            IT Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-4 fw-bold">
              <Nav.Link as={CustomLink} to="" className="">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav  className="me-auto fs-4 fw-bold">
            <Nav.Link as={CustomLink} to="/login" className="">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderMenu;
