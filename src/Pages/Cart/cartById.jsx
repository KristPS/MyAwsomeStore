import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://fakestoreapi.com/carts';

const CartById = () => {
  const [carts, setCarts] = useState([]);

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

  // Fetch a specific cart based on id
  const getCartById = async (id) => {
    const data = await fetchData(`${API_BASE_URL}/${id}`);
    setCarts([data]); // Update the state with the fetched data
  };

  useEffect(() => {
    // Example usage of functions
    getCartById(1);
  }, []);

  return (
    <div>
      <h2>Cart List</h2>
      {carts.map((cart) => (
        <div key={cart.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <p>Cart ID: {cart.id}</p>
          <p>User ID: {cart.userId}</p>
          <p>Date: {cart.date}</p>
          <p>Products:</p>
          <ul>
            {cart.products.map((product, index) => (
              <li key={index}>
                Product ID: {product.productId}, Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CartById;
