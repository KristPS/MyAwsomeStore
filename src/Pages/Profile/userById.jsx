// import React, { useState, useEffect } from 'react';

// const BASE_URL = 'https://fakestoreapi.com/users';

// const UserById = () => {
//   const [user, setUser] = useState(null);

//   const fetchData = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
//   const getUserById = async (id) => {
//     const data = await fetchData(`${BASE_URL}/${id}`);
//     setUser(data);
//   };

//   useEffect(() => {
//     getUserById(1);
//   }, []);

//   return (
//     <div>
//       <h2>User Details</h2>
//       {user && (
//         <div>
//           <p>User ID: {user.id}</p>
//           <p>Email: {user.email}</p>
//           <p>Username: {user.username}</p>
//           <p>Name: {user.name.firstname} {user.name.lastname}</p>
//           <p>Address: {user.address.city}, {user.address.street} {user.address.number}, {user.address.zipcode}</p>
//           <p>Phone: {user.phone}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserById;
// 