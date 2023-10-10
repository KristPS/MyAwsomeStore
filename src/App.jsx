// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/getAllCarts.jsx";
import Products from "./Pages/Products/allProducts.jsx";
import Signup from "./Pages/signup.jsx";
import Login from "./Pages/login.jsx";
import Logout from "./Pages/logout.jsx";
import NavBar from "./Components/layout.jsx";


function Home()  {
  return (
<div>
        <h1>Welcome to the Home Page</h1>
      </div>
  )
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <div className="home">
      <div>Welcome to the Home Page</div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<Products />} />
        <Route path="/getAllCarts" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Signup setToken={setToken} />} />
        
      </Routes>
    </div>
  );
}

export default App;
