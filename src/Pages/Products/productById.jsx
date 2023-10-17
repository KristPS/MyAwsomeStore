import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://fakestoreapi.com/products';

const ProductById = () => {
  const [product, setProduct] = useState({});
  

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

  const getProductById = async (id) => {
    const data = await fetchData(`${BASE_URL}/${id}`);
    setProduct(data);
  };

  const addToCart = () => {
    let currentCart = localStorage.getItem('cart');
    currentCart = currentCart ? JSON.parse(currentCart) : [];

    // check if the product already exists in the cart
    const existingProduct = currentCart.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentCart.push({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`${product.title} added to cart!`);
  };

  useEffect(() => {
    getProductById(1);
  }, []);

  return (
    <div>
      <h2>Product Details</h2>
      {Object.keys(product).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Product ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price?.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Image: <img src={product.image} alt={product.title} style={{ maxWidth: '25%' }} /></p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductById;
