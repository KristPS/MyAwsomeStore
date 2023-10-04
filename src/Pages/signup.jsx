import React, { useState } from 'react';

const API_BASE_URL = 'https://fakestoreapi.com/auth/signup';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        setErrorMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred during signup. Please try again.');
    }
  };

  
  const fetchUserDetail = async (userId) => {
    const userDetailResponse = await fetch(`https://fakestoreapi.com/users/${userId}`);
    const userDetailData = await userDetailResponse.json();
    return userDetailData;
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Signup;
