import React from "react";
import "./styles.css";

import useProducts from "./useProducts.js";
const Products = () => {
  const { headings, products } = useProducts();
  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map((headingItem, index) => (
            <th key={index} className="th">
              {headingItem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((productItem) => (
          <tr key={productItem.id}>
            <td className="td title">{productItem.title}</td>
            <td className="td ">
              <div className="description">{productItem.description}</div>
            </td>
            <td className="td">
              <img
                className="thumbnail"
                src={productItem.thumbnail}
                alt={productItem.title}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
