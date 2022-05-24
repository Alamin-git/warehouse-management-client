import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UserItems = () => {
  const [user] = useAuthState(auth);
  const [userProduct, setUserProduct] = useState([]);
  useEffect(() => {
    const url = `https://it-warehouse.herokuapp.com/userproduct/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserProduct(data));
  }, [user.email]);

  const handelDltProduct = (id) => {
    const proceed = window.confirm("Are You Sure");
    if (proceed) {
      const url = `https://it-warehouse.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Item Delete");
          const remainingProduct = userProduct.filter(
            (product) => product._id !== id
          );
          setUserProduct(remainingProduct);
        });
    }
  };

  return (
    <Container>
      <h2 className="mt-5 mb-5 text-center fw-bold products-header">
        User: {user.displayName} <br /> items: {userProduct.length}
      </h2>
      <Table striped bordered hover>
        <tbody>
          {userProduct.map((product) => (
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
    </Container>
  );
};

export default UserItems;
