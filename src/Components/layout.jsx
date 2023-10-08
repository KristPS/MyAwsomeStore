// layout.jsx
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layout";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart/getAllCarts";
import Products from "../Pages/Products/allProducts";
import Users from "../Pages/Profile/allUsers";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import NotFound from "../Pages/NotFound";

export default function Layout() {
  return (
    
      <div className="layout-page">
        <header>
        
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
                <Link to="/productById">Product by ID</Link>
              </li>
              <li>
                <Link to="/specifiCategory">Product by Specific Category</Link>
              </li>
              <li>
                <Link to="/allCategories">All Categories</Link>
              </li>
              <li>
                <Link to="/cartById">Cart by ID</Link>
              </li>
              <li>
                <Link to="/createNewCart">Create New Cart</Link>
              </li>
              <li>
                <Link to="/updateCart">Update Cart</Link>
              </li>
              <li>
                <Link to="/deleteCart">Delete Cart</Link>
              </li>
              <li>
                <Link to="/allUsers">Users</Link>
              </li>
              <li>
                <Link to="/createUser">Create User</Link>
              </li>
              <li>
                <Link to="/updateUser">Update User</Link>
              </li>
              <li>
                <Link to="/deleteUser">Delete User</Link>
              </li>
              <li>
                <Link to="/userById">User by ID</Link>
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
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allProducts" element={<Products />} />
            <Route path="/allCategories" element={<Products />} />
            <Route path="/specificCategories" element={<Products />} />
            <Route path="/productById" element={<Products />} />
            <Route path="/getAllCarts" element={<Cart />} />
            <Route path="/cartById" element={<Cart />} />
            <Route path="/createNewCart" element={<Cart />} />
            <Route path="/updateCart" element={<Cart />} />
            <Route path="/deleteCart" element={<Cart />} />
            <Route path="/createUser" element={<Users />} />
            <Route path="/allUsers" element={<Users />} />
            <Route path="/updateUser" element={<Users />} />
            <Route path="/deleteUser" element={<Users />} />
            <Route path="/userById" element={<Users />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
   
  );
}
