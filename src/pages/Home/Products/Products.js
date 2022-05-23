import React from "react";
import { Container, Row } from "react-bootstrap";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";
import './Products.css'


const Products = () => {
  const [products] = useProducts();
  return (
      <Container>
        <h2 className="text-center fw-bold mb-5 mt-5 products-header">Our Products</h2>
        <Row>
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
  );
};

export default Products;
