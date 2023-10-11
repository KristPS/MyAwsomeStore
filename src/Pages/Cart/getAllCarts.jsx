import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/carts';

const GetAllCarts = () => {
  const [carts, setCarts] = useState([]);

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

  const getAllCarts = async () => {
    try {
    const data = await fetchData(BASE_URL);
    setCarts(data);
  } catch (error) {
    console.error('Error fetching all carts', error);
  }
    
  };

  const deleteCart = async (cartId) => {
    try {
      await fetch(`${BASE_URL}/${cartId}`, {
        method: 'DELETE',
      });

    getAllCarts();
    } catch (error) {
      console.error('Error deleting cart:', error);
    }
  };

  useEffect(() => {
    getAllCarts();
  }, []);

  return (
    <div>
      <h2>Cart List</h2>
      {carts.map((cart) => (
        <div key={cart.id}>
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
          <button onClick={() => deleteCart(cart.id)}>Delete Cart</button>
        </div>
      ))}
    </div>
  );
};

export default GetAllCarts;
