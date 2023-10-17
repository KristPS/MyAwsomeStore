import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://fakestoreapi.com/products';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };


  const getAllProducts = async () => {
    const productsData = await fetchData(BASE_URL);
    setProducts(productsData);

    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    setCategories(uniqueCategories);
  };

  const addToCart = (productId) => {
    // Find the product with the specified ID
    const productToAdd = products.find(product => product.id === productId);

    // Check if the product is already in the cart
    const isInCart = cart.find(item => item.id === productId);

    if (isInCart) {
      // If already in the cart, update the quantity
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      // If not in the cart, add it with quantity 1
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllProducts();
  }, []);

  return (
    <>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>Product ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Image: <img src={product.image} alt={product.title} style={{ maxWidth: '25%' }} /></p>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
};

export default AllProducts;

    <>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>Product ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Image: <img src={product.image} alt={product.title} style={{ maxWidth: '25%' }} /></p>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
};

export default AllProducts;
