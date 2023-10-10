import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart/getAllCarts.jsx";
import Products from "./Pages/Products/allProducts.jsx";
import Login from "./Pages/login.jsx";
import Logout from "./Pages/logout.jsx";

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
              <Link to="/allProducts">Products</Link>
            </li>
            <li>
              <Link to="/getAllCarts">Cart</Link>
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
        <Route path="/allProducts" element={<Products />} />
        <Route path="/getAllCarts" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
               
      </Routes>
    </div>
    </Router>
  );
}

export default App;
