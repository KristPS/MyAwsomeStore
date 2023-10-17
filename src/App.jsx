import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart/getAllCarts";
import Products from "./Pages/Products/allProducts";
import Login from "./Pages/login";
import Logout from "./Pages/logout";
import Home from "./Pages/home";
import Checkout from "./Pages/checkout";

function App() {
  // This is the entry point of your app - anything that you want to use across different components (like token, user, cart)
  // can be fetched here and set in state 
  const [token, setToken] = useState("");
  // users, setUsers 
  return (
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/carts">Cart</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* Once a user has logged in, you can pass that user's info into the cart component to get user's cart.  */}
          <Route path="/carts" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* You will also want to pass in setUser to your Logout component - when you log out, you can set user to null to clear all user info */}
          <Route path="/logout" element={<Logout />} />
          {/* once you fetch all users, you can pass them into the Login component (example: users={users} setUser={setUser}) */}
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </div>
    
  );
}

export default App;
