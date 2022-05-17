import constants from "./constants";

const fetchUsersRequest = (requestParams) => {
  return {
    type: constants.FETCH_USERS_REQUEST,
    payload: requestParams,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: constants.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFail = (error) => {
  return {
    type: constants.FETCH_USERS_FAIL,
    payload: error,
  };
};

const deleteUsersRequest = (requestParams) => {
  return {
    type: constants.DELETE_USERS_REQUEST,
    payload: requestParams,
  };
};

const deleteUsersSuccess = (id) => {
  return {
    type: constants.DELETE_USERS_SUCCESS,
    payload: id,
  };
};

const deleteUsersFail = (error) => {
  return {
    type: constants.DELETE_USERS_FAIL,
    payload: error,
  };
};

const editUsersRequest = (requestParams) => {
  return {
    type: constants.EDIT_USERS_REQUEST,
    payload: requestParams,
  };
};

const editUsersSuccess = (id) => {
  return {
    type: constants.EDIT_USERS_SUCCESS,
    payload: id,
  };
};

const editUsersFail = (error) => {
  return {
    type: constants.EDIT_USERS_SUCCESS,
    payload: error,
  };
};

//eslint-disable-next-line
export default {
  fetchUsersFail,
  fetchUsersRequest,
  fetchUsersSuccess,
  deleteUsersFail,
  deleteUsersRequest,
  deleteUsersSuccess,
  editUsersFail,
  editUsersRequest,
  editUsersSuccess,
};
