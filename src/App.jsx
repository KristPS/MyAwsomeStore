import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductList from "./Pages/Files/productList";
import ProductDetail from "./Pages/Files/productDetails";
import Cart from "./Pages/Files/cart";
import Checkout from "./Pages/Files/checkout";

import Login from "./Pages/Files/login";
import Logout from "./Pages/Files/logout";

function App() {
<<<<<<< HEAD
=======
  // This is the entry point of your app - anything that you want to use across different components (like token, user, cart)
  // can be fetched here and set in state 
  const [token, setToken] = useState("");
  // users, setUsers 
>>>>>>> f416e60f8c2865143c57dcaabc64d08d6f5803e6
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

        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
=======
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* Once a user has logged in, you can pass that user's info into the cart component to get user's cart.  */}
          <Route path="/carts" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* You will also want to pass in setUser to your Logout component - when you log out, you can set user to null to clear all user info */}
          <Route path="/logout" element={<Logout />} />
          {/* once you fetch all users, you can pass them into the Login component (example: users={users} setUser={setUser}) */}
          <Route path="/login" element={<Login setToken={setToken} />} />
>>>>>>> f416e60f8c2865143c57dcaabc64d08d6f5803e6
        </Routes>
      </div>
    </Router>
  );
}

export default App;
