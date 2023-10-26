// import React, { useState, useEffect } from 'react';

// const BASE_URL = 'https://fakestoreapi.com/users';

// const DeleteUser = () => {
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

//   const deleteUser = async (id) => {
//     try {
//   const response = await fetch(`${BASE_URL}/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       console.log(`User with id ${id} deleted successfully`);
      
//       setUsers(users.filter((user) => user.id !== id));
//     } else {
//       console.error(`Failed to delete user with ${id}:`, response.status, response.statusText);
//     }
//   } catch (error)  {
//     console.error('Error deleting user:', error);
//   }
//   };

//   useEffect(() => { 
    
//     deleteUser(1);
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
//           <button onClick={() => deleteUser(user.id)}>Delete User</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeleteUser;
