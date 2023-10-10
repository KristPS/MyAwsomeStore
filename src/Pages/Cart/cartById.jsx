import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/carts';

const CartById = () => {
  const [cart, setCart] = useState(null);

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
    try {
      const data = await fetchData(`${BASE_URL}/${id}`);
      setCart(data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error getting cart by ID:', error);
    }
  };

  useEffect(() => {
   getCartById(1);
  }, []);

  return (
    <div>
      <h2>Cart Details</h2>
      {cart && (
        <div>
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
      )}
    </div>
  );
};

export default CartById;
