import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  const handelDltProduct = id =>{
    const proceed = window.confirm('Are You Sure');
    if(proceed){
      const url = `https://it-warehouse.herokuapp.com/product/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        toast('Item Delete')
        const remainingProduct = products.filter(product => product._id !== id);
        setProducts(remainingProduct);
      })
    }
}
  return (
    <Container>
      <h2 className="mt-5 mb-5 text-center fw-bold products-header">
        Manage All Products
      </h2>
      <div className="d-flex gap-3 justify-content-around">
        <div className="w-75">
          <Link
            to={"/addItems"}
            className="fs-5 btn text-white product-btn mb-3"
            type="submit"
          >
            Add New Item
          </Link>
          <Table striped bordered hover>
            <tbody>
              {products.map((product) => (
                <>
                  <tr className="text-center">
                    <td>
                      <img
                        style={{ width: "5rem", height: "3rem" }}
                        src={product.img}
                        alt=""
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                         onClick={() => handelDltProduct(product._id)}
                        className="border p-2 btn btn-danger px-3 fw-bold"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default ManageProducts;
