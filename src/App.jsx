import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import ProductList from "./Pages/Files/productList";
import ProductDetail from "./Pages/Files/productDetails";
import Cart from "./Pages/Files/cart";
import Checkout from "./Pages/Files/checkout";

import Login from "./Pages/Files/login";
import Logout from "./Pages/Files/logout";

function App() {
  
   
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        <Routes>  {/* Wrap all Route components inside Routes */}
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
