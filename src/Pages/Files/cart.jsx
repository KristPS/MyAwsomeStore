//cart.jsx
import React, { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import {CartContext} from '../../cartContext'

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  //const (cartItems) = useContext(CartContext);

  const fetchCartData = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const removeFromCart = (productId) => {
    let currentCart = localStorage.getItem("cart");
    currentCart = currentCart ? JSON.parse(currentCart) : [];

    const updatedCart = currentCart.filter((item) => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button>-</button>
            <span>{item.quantity}</span>
            <button>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <Link to = "/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
