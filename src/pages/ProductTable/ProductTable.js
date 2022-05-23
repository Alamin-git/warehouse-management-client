import React from "react";

const ProductTable = ({ product }) => {
  const { name, img, quantity } = product;
  return (
    <tr className="text-center">
      <td>
        <img style={{ width: "5rem", height: "3rem" }} src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>{quantity}</td>
      {/* <td className=''><TrashIcon /></td> */}
      <td><button className="border p-2 btn btn-danger px-3 fw-bold">X</button></td>
    </tr>
  );
};

export default ProductTable;
