import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://fakestoreapi.com/users';

const CreateUser = () => {
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

  // POST: Create a new user
  const createUser = async (newUserData) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    });

    const createdUser = await response.json();
    console.log(createdUser);

    // Update the users state if needed
    setUsers([...users, createdUser]);
  };

  useEffect(() => {
    createUser({
      email: 'example@example.com',
      username: 'exampleuser',
      password: 'password123',
      name: {
        firstname: 'John',
        lastname: 'Doe',
      },
      address: {
        city: 'City',
        street: 'Street',
        number: 123,
        zipcode: '12345',
        geolocation: {
          lat: '12.3456',
          long: '-78.9012',
        },
      },
      phone: '123-456-7890',
    });

    // Note: You generally don't want to include JSX here
  }, []); // Empty dependency array for a one-time effect

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

export default CreateUser;
