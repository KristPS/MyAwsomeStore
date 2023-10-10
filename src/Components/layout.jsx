// layout.jsx
import React from "react";
import { Link } from "react-router-dom";
//import NavBar from "./layout";
import Cart from "../Pages/Cart/getAllCarts";
import Products from "../Pages/Products/allProducts";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import "../App.jsx";
import "../App.css";


export default function Layout() {
  return (
    <div className="navbar-page">
      <header>
        <nav>
          
          <ul>
            <li>
              <Link to="/">NavBar</Link>
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
        </nav>
      </header>
  
      
    </div>
  );
}

  );
}
