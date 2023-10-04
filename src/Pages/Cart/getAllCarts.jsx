import React, { useEffect, useState } from 'react';


const API_BASE_URL = 'https://fakestoreapi.com/carts';

const GetAllCarts = () => {
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

  // Fetch all carts
  const getAllCarts = async () => {
    const data = await fetchData(API_BASE_URL);
    setCarts(data);
  };

  useEffect(() => {
    // Example usage of functions
    getAllCarts();
  }, []); // Don't forget the dependency array

  return (
    <div className="cart-page">
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
          <button onClick={() => deleteCart(cart.id)}>Delete Cart</button>
        </div>
      ))}
    </div>
  );
};

export default GetAllCarts;
