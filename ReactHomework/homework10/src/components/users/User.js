import React, { useEffect, useState } from "react";
import { properties } from "../config/properties";
import { useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${properties.api.root}/users/${id}`)
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((err) => console.log(err));
  }, [user]);
  return (
    <div>
      {user ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No such user</p>
      )}
    </div>
  );
};
