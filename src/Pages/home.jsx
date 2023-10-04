// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to My Awesome Store</h1>
      <p>Explore our Products:</p>
      <ul>
        <li>
          <Link to="/allProducts">All Products</Link>
        </li>
        <li>
          <Link to="/allCategories">All Categories</Link>
        </li>
        <li>
          <Link to="/specificCategories">Specific Categories</Link>
        </li>
        <li>
          <Link to="/cartById">Cart by ID</Link>
        </li>
        <li>
          <Link to="/createNewCart">Create New Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

