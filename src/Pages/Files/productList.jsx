import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let url = "https://fakestoreapi.com/products";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="50"
              height="50"
            />
            <span>{product.title}</span>
            <span>{product.price}</span>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
