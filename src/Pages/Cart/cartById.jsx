import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/carts';

const CartById = () => {
  const [cart, setCart] = useState({});

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

   const getCartById = async (id) => {
    try {
      const data = await fetchData(`${BASE_URL}/${id}`);
      setCart(data); 
    } catch (error) {
      console.error('Error getting an item:', error);
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
          <p>Date: {new Date(cart.date).toLocaleDateString()}</p>

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
