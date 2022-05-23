import React from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import ProductTable from "../ProductTable/ProductTable";

const ManageProducts = () => {
  const [products] = useProducts();
  return (
    <Container>
        <h2 className="mt-5 mb-5 text-center fw-bold products-header">Manage All Products</h2>
      <div className="d-flex gap-3 justify-content-around">
        <div className="w-50">
          <Table striped bordered hover>
              <h3 className="text-center mb-5">All Product</h3>
            <tbody>
              {products.map((product) => (
                <ProductTable key={product._id} product={product} />
              ))}
            </tbody>
          </Table>
        </div>
        <div className="w-25">
          <Form>
              <h3 className="text-center mb-5">Add a new Product</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Product Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Supplier</Form.Label>
              <Form.Control type="text" placeholder="Supplier" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control type="text" placeholder="Photo Url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Quantity" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price" />
            </Form.Group>
            <Button variant="fs-3 btn text-white product-btn" type="submit">
            Add New
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ManageProducts;
