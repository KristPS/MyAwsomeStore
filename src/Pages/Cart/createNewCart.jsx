import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://fakestoreapi.com/carts';

const CreateNewCart = () => {
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

  // POST: Create a new cart
  const createNewCart = async (newCartData) => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCartData),
    });

    const createdCart = await response.json();
    console.log(createdCart);
  };

  useEffect(() => {
    // Example usage of functions
    createNewCart({ userId: 1, date: new Date(), products: [{ productId: 1, quantity: 3 }] });
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

export default CreateNewCart;
