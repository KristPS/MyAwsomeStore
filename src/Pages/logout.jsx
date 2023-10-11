import React, { useEffect } from "react";
import Signup from "../Pages/signup";
import { useNavigate } from "react-router-dom";

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
