import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/carts';

const CreateNewCart = () => {
  const [createdCart, setCreatedCart] = useState({});

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


  const createNewCart = async (newCartData) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCartData),
      });

      if (response.ok) {
        const createdCartData = await response.json();
        setCreatedCart(createdCartData);
      } else {
        console.error('Failed to create new cart:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error creating new cart:', error);
    }
  };

  useEffect(() => {
   createNewCart({ userId: 1, date: new Date(), products: [{ productId: 1, quantity: 3 }] });
  }, []);

  return (
    <div>
      <h2>Created Cart</h2>
      {createdCart && (
        <div>
          <p>Cart ID: {createdCart.id}</p>
          <p>User ID: {createdCart.userId}</p>
          <p>Date: {new Date(createdCart.date).toLocaleDateString()}</p>

          <p>Products:</p>
          <ul>
            {createdCart.products.map((product, index) => (
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

export default CreateNewCart;
