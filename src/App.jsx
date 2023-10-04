// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/getAllCarts.jsx";
import Home from "./Pages/Home"; 
import Products from "./Pages/Products/allProducts.jsx";
import NotFound from "./Pages/notFound";
import Signup from "./Pages/signup.jsx";
import Login from "./Pages/login.jsx";
import Logout from "./Pages/logout.jsx";
import Layout from "./Components/layout.jsx";
import Users from "./Pages/Profile/allUsers";
import Button from "./Pages/button";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <div className="app">
      <Layout token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<Products />} />
        <Route path="/allCategories" element={<Products />} />
        <Route path="/specificCategories" element={<Products />} />
        <Route path="/allUsers" element={<Users />} />
        <Route path="/getAllCarts" element={<Cart />} />
        <Route path="/productById" element={<Products />} />
        <Route path="/createNewCart" element={<Cart />} />
        <Route path="/updateCart" element={<Cart />} />
        <Route path="/deleteCart" element={<Cart />} />
        <Route path="/cartById" element={<Cart />} />
        <Route path="/createUser" element={<Users />} />
        <Route path="/updateUser" element={<Users />} />
        <Route path="/deleteUser" element={<Users />} />
        <Route path="/userById" element={<Users />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Signup setToken={setToken} />} />
        <Route path="/Profile" caseSensitive={false} element={<Users token={token} />} />
        <Route path="/Cart" caseSensitive={false} element={<Cart token={token} />} />
        <Route path="/button" element={<Button />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
