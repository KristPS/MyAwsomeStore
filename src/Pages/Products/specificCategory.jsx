import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'https://fakestoreapi.com/products';

const SpecificCategories = () => {
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

  // Fetch products in a specific category
  const getProductsByCategory = async (category, sort) => {
    const data = await fetchData(`${API_BASE_URL}/category/${category}?sort=${sort}`);
    setProducts(data);
  };

  // Fetch all categories
  const getAllCategories = async () => {
    const data = await fetchData(`${API_BASE_URL}/categories`);
    setCategories(data);
  };

  useEffect(() => {
   
    getProductsByCategory('jewelery', 'electronics', 'men clothing', 'women clothing');
    
    getAllCategories();
  }, []);

  return (
    <div className="specificCategories">
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
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
    </div>
  );
};

export default SpecificCategories;
