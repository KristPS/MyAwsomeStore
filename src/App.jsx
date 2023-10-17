import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart/getAllCarts";
import Products from "./Pages/Products/allProducts";
import Login from "./Pages/login";
import Logout from "./Pages/logout";
import Home from "./Pages/home";
import Checkout from "./Pages/checkout";

function App() {
  const [token, setToken] = useState("");

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
          <Route path="/carts" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </div>
    
  );
}

export default App;
