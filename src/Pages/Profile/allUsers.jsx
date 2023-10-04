import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'https://fakestoreapi.com/users';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Fetch all users
  const getAllUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchData(API_BASE_URL);
      setUsers(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []); // Empty dependency array for initial fetch

  return (
    <div className="users-page">
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {!loading &&
        users.map((user) => (
          <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>User ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Name: {user.name.firstname} {user.name.lastname}</p>
            <p>Address: {user.address.city}, {user.address.street} {user.address.number}, {user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
    </div>
  );
};

export default AllUsers;
