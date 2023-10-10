// layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.jsx";
import "../App.css";

const Layout = () => {
  return (
    <nav className="layout">
      <div className="container">
        <div className="brand">
          My Awsome Store
        </div>
        <div className="layout-elements">
          <ul>
            <li>
              <Link to="/">Layout</Link>
            </li>
            <li>
              <Link to="/allProducts">Products</Link>
            </li>
            <li>
              <Link to="/getAllCarts">Cart</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
