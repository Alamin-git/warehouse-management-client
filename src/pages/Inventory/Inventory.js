import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [product] = useProductDetails(id);
  // console.log(product);
  // const [ProductQuantity, setProductQuantity] = useState();
  //   setProductQuantity(product.quantity);
  
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
};


  return (
    <Container>
      <div className="border rounded p-1">
        <h2 className="mt-5 mb-5 text-center p-d-heading">
          Product Name: {product.name}
        </h2>
        <div className="d-flex gap-5">
          <div className="w-50">
            <img className="single-p-i mt-3" src={product.img} alt="" />
          </div>
          <div className="w-50">
            <h2 className="fs-4 fw-bold">{product.name}</h2>
            <p className="text-muted">{product.body}</p>
            <h4>
              Supplier:{" "}
              <span className="fs-5 fw-bold text-secondary">
                {product.supplier}
              </span>
            </h4>
            <h4>
              Price:{" "}
              <span className="fw-bold text-secondary">{product.price}</span>
            </h4>
            <h4>
              Quantity:{" "}
              <span className="fw-bold text-secondary">{product.quantity}</span>
            </h4>
            <div className="d-flex justify-content-between">
              <button
                
                className="btn btn-danger mt-4 mb-5"
              >
                Delivered
              </button>
              <div className="d-flex mt-4 mb-5 align-items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="p-1"
                    type="number"
                    {...register("quantity")}
                    placeholder="Add Number of Quantity"
                  />
                  <input
                    className="btn product-btn ms-2 text-white"
                    type="submit"
                    value="Add Product"
                  />
                </form>
              </div>
            </div>
            <Link className="btn product-btn text-white" to="/manageProduct" >Manage Products</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Inventory;
