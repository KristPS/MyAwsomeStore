import React, { useState, useEffect } from "react";
//import Logout from './Logout';
import Signup from "../Pages/signup";

const AuthExample = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const Logout = ({ setToken }) => {
    useEffect(() => {
      localStorage.removeItem("token");
      setToken("");
    }, [setToken]);
  };

  return (
    <div className="logout-page">
      {token ? (
        <div>
          {/* Render authenticated content here */}
          <Logout setToken={setToken} />
        </div>
      ) : (
        <Signup setToken={setToken} />
      )}
    </div>
  );
};

export default AuthExample;
