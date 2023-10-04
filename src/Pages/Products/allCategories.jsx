import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'https://fakestoreapi.com/products';

const AllProductCategories = () => {
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

  // Fetch all products and extract categories
  const getAllCategories = async () => {
    const data = await fetchData(API_BASE_URL);
    setProducts(data);

    // Extract unique categories from products
    const uniqueCategories = [...new Set(data.map(product => product.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    // Example usage of functions
    getAllCategories();
  }, []);

  return (
    <div className="allCategories">
      <h2>Categories List</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductCategories;
