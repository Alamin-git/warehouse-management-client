import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = `https://it-warehouse.herokuapp.com/product`
        fetch(url, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(result => console.log(result))

          toast('Item Added')
          reset();
    };

  return (
    <Container>
      <h3 className="mt-5 mb-5 text-center fw-bold products-header">
        Add a new Product
      </h3>
      <Form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto border p-3 rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control {...register("name")} type="text" placeholder="Product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" {...register("body")} type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Supplier</Form.Label>
          <Form.Control {...register("supplier")} type="text" placeholder="Supplier" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control {...register("img")} type="text" placeholder="Photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control {...register("quantity")} type="number" placeholder="Quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control {...register("price")} type="number" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User Email</Form.Label>
          <Form.Control {...register("userEmail")} type="email" value={user.email} readOnly/>
        </Form.Group>
        <Button variant="fs-3 btn text-white product-btn" type="submit">
          Add New Item
        </Button>
      </Form>
    </Container>
  );
};

export default AddItems;
