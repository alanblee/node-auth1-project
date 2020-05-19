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


export default createReducer(initialState, {
  // [LOGIN_USER]: loginUser,
  // [LOADING_USER]: loadingUser,
  // [AUTH_ERROR]: authError,
  // [REGISTER_USER]: registerUser,
});