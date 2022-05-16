import React from "react";
import PropTypes from "prop-types";

export const UsersComponent = ({ listOfUsers, message }) => {
  return (
    <div>
      {listOfUsers ? (
        <table border="1">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
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
