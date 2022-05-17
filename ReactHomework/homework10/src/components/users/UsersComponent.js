import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const UsersComponent = ({
  listOfUsers,
  message,
  editUser,
  deleteUser,
}) => {
  return (
    <div>
      {listOfUsers ? (
        <table border="1">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button>
                      <Link to={`/user/${user.id}`}>See User</Link>
                    </button>
                    <button onClick={() => editUser(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Failed to load data, {message}</p>
      )}
    </div>
  );
};

UsersComponent.propTypes = {
  listOfUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  message: PropTypes.object,
};
