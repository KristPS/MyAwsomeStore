import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://fakestoreapi.com/users';

const UpdateUser = () => {
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

  // PUT: Update a user
  const updateUser = async (id, updatedUserData) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    });

    if (response.ok) {
      // Fetch updated user data after successful update
      const updatedData = await fetchData(API_BASE_URL);
      setUsers(updatedData);
    } else {
      console.error(`Failed to update user with id ${id}`);
    }
  };

  useEffect(() => {
    // Example usage of functions
    updateUser(1, {
      email: 'updated@example.com',
      username: 'updateduser',
      password: 'updatedpassword',
      name: {
        firstname: 'Updated',
        lastname: 'User',
      },
      address: {
        city: 'UpdatedCity',
        street: 'UpdatedStreet',
        number: 456,
        zipcode: '54321',
        geolocation: {
          lat: '21.3456',
          long: '-87.9012',
        },
      },
      phone: '987-654-3210',
    });
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
     </div>
      ))}
    </div>
  );
};

export default UpdateUser;
