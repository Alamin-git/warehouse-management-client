import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

const Progress = () => {
  return (
    <Container>
      <h2 className="mt-5 mb-5 text-center fw-bold products-header">
        Our Company Progress
      </h2>
      <div className="w-75 mx-auto">
        <h4>2017</h4>
        <ProgressBar animated variant="secondary" now={65} />
        <h4>2018</h4>
        <ProgressBar animated variant="warning" now={39} />
        <h4>2019</h4>
        <ProgressBar animated variant="danger" now={28} />
        <h4>2020</h4>
        <ProgressBar animated variant="info" now={75} />
        <h4>2021</h4>
        <ProgressBar animated variant="success" now={95} />
      </div>
    </Container>
  );
};

export default Progress;
