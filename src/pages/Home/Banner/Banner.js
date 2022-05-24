import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center align-items-center flex-column">
      <Container>
        <h2 className="fs-1 fw-bold mb-5 banner-heading">
          Distribution, Storage, Warehousing & Fulfillment
        </h2>
        <h4 className="fs-3 fw-bold banner-heading">
          Your solution for first class warehousing services for the Laptop
          industries.
        </h4>
      </Container>
    </div>
  );
};

export default Banner;
