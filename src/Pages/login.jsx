import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const BASE_URL = 'https://fakestoreapi.com/auth/login';
/* To access the props that you passed in, you can do EITHER 
______________________________________
export default function Login(props) {
...
  // to use what's been passed in, access the props object  
  props.setToken(...)
}
__________________________
OR destructure the props (you are importing the keys of the props object one by one)

export default function Login({ setToken, user, ...props}) { 
  // to use, you can simple invoke the function 
  setToken(...)
}

*/
export default function Login() {
  // use username and password to filter the users array and select the correct user https://fakestoreapi.com/docs#u-all
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  // this is duplicating your state - let's get rid of this 
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
          
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        // once you have an OK response, you can set user here. 
        // since setUser is passed into this component and exists in App.jsx, once you set it here it will be accessible to other components that share this state. 
        localStorage.setItem("token", data.token);
        navigate("/cart");
        console.log("Login successful");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("An error occurred", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
