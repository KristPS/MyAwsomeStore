import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://fakestoreapi.com/users';

const DeleteUser = () => {
  const [users, setUsers] = useState([]);

  // Function to fetch data from the API
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  // DELETE: Delete a user
  const deleteUser = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(`User with id ${id} deleted successfully`);
      // Update the users state after successful deletion
      setUsers(users.filter((user) => user.id !== id));
    } else {
      console.error(`Failed to delete user with id ${id}`);
    }
  };

  useEffect(() => {
    // Example usage of functions
    deleteUser(1);
  }, []);

  return (
    <div className="users">
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <p>User ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Name: {user.name.firstname} {user.name.lastname}</p>
          <p>Address: {user.address.city}, {user.address.street} {user.address.number}, {user.address.zipcode}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => deleteUser(user.id)}>Delete User</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteUser;
