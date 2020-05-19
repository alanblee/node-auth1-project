import { createReducer } from "./reducerUtil";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_ERROR,
  LOADING_USER,
} from "../types/authTypes";

const initialState = {
  currentUser: null,
  loggedIn: false,
  errorMessage: "",
  loadingUser: false,
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

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  // [LOADING_USER]: loadingUser,
  // [AUTH_ERROR]: authError,
  [REGISTER_USER]: registerUser,
});
