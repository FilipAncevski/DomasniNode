import constants from "./constants";

const initialState = {
  users: [],
  message: undefined,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case constants.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case constants.FETCH_USERS_FAIL:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case constants.DELETE_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case constants.DELETE_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload)],
        loading: false,
      };

    case constants.DELETE_USERS_FAIL:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };

    case constants.EDIT_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case constants.EDIT_USERS_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        ],
        loading: false,
      };

    case constants.EDIT_USERS_FAIL:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
