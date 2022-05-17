import React, { useEffect, useState } from "react";
import { UsersComponent } from "./UsersComponent";
import { useSelector, useDispatch } from "react-redux";
import { usersOperations } from "./duck";

export default function UsersContainer() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const message = useSelector((state) => state.userReducer.message);
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(usersOperations.fetchUsers());
  }, [dispatch]);

  function editUser(user) {
    setUser(user);
    setEditing(true);
  }

  function saveChange() {
    dispatch(usersOperations.updateUsers(user));
    setEditing(false);
    setUser({});
  }

  function deleteUser(id) {
    dispatch(usersOperations.removeUsers(id));
  }

  return (
    <div>
      {editing && (
        <>
          <input
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button onClick={saveChange}>Save</button>
          <button
            onClick={() => {
              setEditing(false);
              setUser({});
            }}
          >
            &times;
          </button>
        </>
      )}

      <UsersComponent
        listOfUsers={users}
        message={message}
        editUser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}
