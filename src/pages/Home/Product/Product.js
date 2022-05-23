import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, body, img, price, quantity, supplier } = product;

  const navigateToProductDetail = (_id) => {
    navigate(`/product/${_id}`);
  };

  return (
    <Col>
      <Card
        className="mb-5 shadow-lg mx-auto"
        style={{ width: "22rem", height: "34rem" }}
      >
        <Card.Img className="product-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fs-4 fw-bold">{name}</Card.Title>
          <Card.Text className="text-muted">{body.slice(0, 75)}...</Card.Text>
          <Card.Text className="fs-5 fw-bold text-secondary">
            Supplier: {supplier}
          </Card.Text>
          <Card.Text className="fw-bold text-secondary">
            Price: {price}
          </Card.Text>
          <Card.Text className="fw-bold text-secondary">
            Quantity: {quantity}
          </Card.Text>
          <Button
            onClick={() => navigateToProductDetail(_id)}
            variant="fs-3 btn text-white product-btn"
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
