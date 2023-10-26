// import React, { useState, useEffect } from 'react';

// const BASE_URL = 'https://fakestoreapi.com/users';

// const UpdateUser = () => {
//   const [users, setUsers] = useState([]);

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

//    const updateUser = async (id, updatedUserData) => {
//     try {
//       const response = await fetch(`${BASE_URL}/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedUserData),
//       });
  
//       if (response.ok) {
//         const updatedData = await fetchData(BASE_URL);
//         setUsers(updatedData);
//       } else {
//         console.error(`Failed to update user with id ${id}:`, response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   useEffect(() => {
    
//     updateUser(1, {
//       email: 'updated@example.com',
//       username: 'updateduser',
//       password: 'updatedpassword',
//       name: {
//         firstname: 'Updated',
//         lastname: 'User',
//       },
//       address: {
//         city: 'UpdatedCity',
//         street: 'UpdatedStreet',
//         number: 456,
//         zipcode: '54321',
//         geolocation: {
//           lat: '21.3456',
//           long: '-87.9012',
//         },
//       },
//       phone: '987-654-3210',
//     });
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.map((user) => (
//         <div key={user.id}>
//           <p>User ID: {user.id}</p>
//           <p>Email: {user.email}</p>
//           <p>Username: {user.username}</p>
//           <p>Name: {user.name.firstname} {user.name.lastname}</p>
//           <p>Address: {user.address.city}, {user.address.street} {user.address.number}, {user.address.zipcode}</p>
//           <p>Phone: {user.phone}</p>       
//      </div>
//       ))}
//     </div>
//   );
// };

// export default UpdateUser;
