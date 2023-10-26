// import React, { useState, useEffect } from 'react';

// const BASE_URL = 'https://fakestoreapi.com/users';

// const AllUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching user:', error);
//       throw error;
//     }
//   };

//   const getAllUsers = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchData(BASE_URL);
//       setUsers(data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllUsers();
//   }, []); 
//   return (
//     <div>
//       <h2>User List</h2>
//       {loading && <p>Loading...</p>}
//       {!loading &&
//         users.map((user) => (
//           <div key={user.id}>
//             <p>User ID: {user.id}</p>
//             <p>Email: {user.email}</p>
//             <p>Username: {user.username}</p>
//             <p>Name: {user.name.firstname} {user.name.lastname}</p>
//             <p>Address: {user.address.city}, {user.address.street} {user.address.number}, {user.address.zipcode}</p>
//             <p>Phone: {user.phone}</p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default AllUsers;
