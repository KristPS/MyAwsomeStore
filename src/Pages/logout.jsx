import React, { useEffect } from "react";
import Signup from "../Pages/signup";
import { useNavigate } from "react-router-dom";
// once you have user stored, you want to clear the user in the same way that you are clearing the token. 
const Logout = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    };

    performLogout();
  }, [setToken, navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
