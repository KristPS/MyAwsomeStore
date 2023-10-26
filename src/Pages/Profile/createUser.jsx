// import React, { useState, useEffect } from 'react';

// const BASE_URL = 'https://fakestoreapi.com/users';

// const CreateUser = () => {
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

//   const createUser = async (newUserData) => {
//     try {
//     const response = await fetch(BASE_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newUserData),
//     });

//     if (!response.ok) {
//       console.error("Failed to create a new user", response.status, response.statusText);
//       return;
//     }

//     const createdUser = await response.json();
//     console.log(createdUser);

//     setUsers([...users, createdUser]);
//   } catch (error) {
//     console.error('Error creating a new user', error);
//   }
//   };

//   useEffect(() => {
//     createUser({
//       email: 'example@example.com',
//       username: 'exampleuser',
//       password: 'password123',
//       name: {
//         firstname: 'John',
//         lastname: 'Doe',
//       },
//       address: {
//         city: 'City',
//         street: 'Street',
//         number: 123,
//         zipcode: '12345',
//         geolocation: {
//           lat: '12.3456',
//           long: '-78.9012',
//         },
//       },
//       phone: '123-456-7890',
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
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CreateUser;
