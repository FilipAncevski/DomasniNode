import actions from "./actions";
import { getUsers, deleteUsers, editUsers } from "../../api/usersApi";

const fetchUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(actions.fetchUsersRequest(requestParams));
    return getUsers()
      .then((result) => {
        dispatch(actions.fetchUsersSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(actions.fetchUsersFail(err));
        return err;
      });
  };
};

const removeUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(actions.deleteUsersRequest(requestParams));
    return deleteUsers(requestParams)
      .then((result) => {
        dispatch(actions.deleteUsersSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(actions.deleteUsersFail(err));
        return err;
      });
  };
};

const updateUsers = (requestParams) => {
  return (dispatch) => {
    dispatch(actions.editUsersSuccess(requestParams));
    return editUsers(requestParams)
      .then((result) => {
        dispatch(actions.editUsersSuccess(result));
        return result;
      })
      .catch((err) => {
        dispatch(actions.editUsersFail(err));
        return err;
      });
  };
};

//eslint-disable-next-line
export default {
  fetchUsers,
  removeUsers,
  updateUsers,
};
