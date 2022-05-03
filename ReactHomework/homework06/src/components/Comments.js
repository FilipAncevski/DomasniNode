import React from "react";

export const Comments = ({ listOfComments }) => {
  return (
    <div>
      {listOfComments.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {listOfComments.map((comment) => {
              return (
                <tr key={comment.id}>
                  <td>{comment.name}</td>
                  <td>{comment.email}</td>
                  <td>{comment.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading data, please wait</p>
      )}
    </div>
  );
};
