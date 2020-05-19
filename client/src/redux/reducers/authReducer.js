import { createReducer } from "./reducerUtil";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_ERROR,
  GET_USER_LIST,
  LOADING_USER,
} from "../types/authTypes";

const initialState = {
  currentUser: null,
  loggedIn: false,
  errorMessage: "",
  loadingUser: false,
  userList: undefined,
};

const loginUser = (state = initialState, payload) => {
  return {
    ...state,
    currentUser: payload,
    loggedIn: true,
    loadingUser: false,
  };
};

const registerUser = (state = initialState, payload) => {
  if (payload) {
    return {
      ...state,
      currentUser: payload,
    };
  }
};
const authError = (state = initialState, payload) => {
  localStorage.removeItem("token");
  return {
    ...state,
    currentUser: null,
    loggedIn: false,
    loadingUser: false,
    errorMessage: payload,
  };
};

const getAllUsers = (state = initialState, payload) => {
  return {
    ...state,
    userList: payload,
  };
};
export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [GET_USER_LIST]: getAllUsers,
  [AUTH_ERROR]: authError,
  [REGISTER_USER]: registerUser,
});
