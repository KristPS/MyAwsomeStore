// import React, { useState } from 'react';

// const BASE_URL = 'https://fakestoreapi.com/auth/signup';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignup = async () => {
//     try {
//       const response = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Signup successful:', data);

//         const userDetailData = await fetchUserDetail(data.userId);
//         console.log('User Details:', userDetailData);
        
//       } else {
//         const errorData = await response.json();
//         console.error('Signup failed:', errorData);
//         setErrorMessage('Signup failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       setErrorMessage('An error occurred during signup. Please try again.');
//     }
//   };

//   const fetchUserDetail = async (userId) => {
//     try {
//       const userDetailResponse = await fetch(`BASE_URL/${userId}`);
//       const userDetailData = await userDetailResponse.json();
//       return userDetailData;
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       setErrorMessage('An error occurred while fetching user details.');
//       return null;
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </label>
//         <br />
//         <button type="submit" onClick={handleSignup}>
//           Signup
//         </button>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       </form>
//     </div>
//   );
// };

// export default Signup;
