import React, { useEffect } from "react";
import { UsersComponent } from "./UsersComponent";
import { useSelector, useDispatch } from "react-redux";
import { usersOperations } from "./duck";

export default function UsersContainer() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const message = useSelector((state) => state.userReducer.message);

  useEffect(() => {
    dispatch(usersOperations.fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <UsersComponent listOfUsers={users} message={message} />
    </div>
  );
}
