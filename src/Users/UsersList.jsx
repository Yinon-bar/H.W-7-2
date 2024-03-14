import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSingle from "./UserSingle";
import "./UserList.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(resp.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="UserList">
      {users.map((user) => (
        <UserSingle key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
