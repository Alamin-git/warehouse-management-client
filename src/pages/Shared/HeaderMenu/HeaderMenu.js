import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  const [user] = useAuthState(auth);
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
              {user &&
                <>
                  <Nav.Link
                    as={CustomLink}
                    className="header-menu"
                    to={"/manageProduct"}
                  >
                    Manage Items
                  </Nav.Link>
                  <Nav.Link
                    as={CustomLink}
                    className="header-menu"
                    to={"/addItems"}
                  >
                    Add Items
                  </Nav.Link>
                  <Nav.Link
                    as={CustomLink}
                    className="header-menu"
                    to={`/myItems/${user.email}`}
                  >
                    My Items
                  </Nav.Link>
                </>
            }
            </Nav>
          <Nav className="me-auto fs-4 fw-bold">
            {user ? (
              <Nav.Link
                as={CustomLink}
                onClick={() => {
                  signOut(auth);
                }}
                className="header-menu"
                to={"/login"}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={CustomLink} to="/login" className="">
                Login
              </Nav.Link>
            )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderMenu;
