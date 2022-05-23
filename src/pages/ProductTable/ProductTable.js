import React from "react";
import { toast } from "react-toastify";

const ProductTable = ({ userProduct }) => {
  const { _id, name, img, quantity } = userProduct;
  const handelDltProduct = id =>{
      const proceed = window.confirm('Are You Sure');
      if(proceed){
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          toast('Item Delete')
        })
      }
  }
  return (
    <tr className="text-center">
      <td>
        <img style={{ width: "5rem", height: "3rem" }} src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td><button onClick={() => handelDltProduct(_id)} className="border p-2 btn btn-danger px-3 fw-bold">X</button></td>
    </tr>
  );
};

export default ProductTable;
