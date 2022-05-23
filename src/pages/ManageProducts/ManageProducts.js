import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductTable from "../ProductTable/ProductTable";

const ManageProducts = () => {
  const [products] = useProducts();
  return (
    <Container>
        <h2 className="mt-5 mb-5 text-center fw-bold products-header">Manage All Products</h2>
      <div className="d-flex gap-3 justify-content-around">
        <div className="w-75">
      <Link to={'/addItems'} className="fs-5 btn text-white product-btn mb-3" type="submit">
          Add New Item
        </Link>
          <Table striped bordered hover>
            <tbody>
              {products.map((product) => (
                <ProductTable key={product._id} product={product} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default ManageProducts;
