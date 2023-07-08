import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {listOfUsers.map((user) => (
        <div key={user.id}>
          <h3> Name: {user.name}</h3>
          <p> Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;
