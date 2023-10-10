import React, { useState, useEffect } from 'react';


const BASE_URL = 'https://fakestoreapi.com/products';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Function to fetch data from the API
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  // Fetch all products
  const getAllProducts = async () => {
    const data = await fetchData(BASE_URL);
    setProducts(data);

    // Extract unique categories from products
    const uniqueCategories = [...new Set(data.map(product => product.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
  getAllProducts();
  }, []);

  return (
    <>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>Product ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Image: <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} /></p>
        </div>
      ))}
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
};

export default AllProducts;
