import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_ERROR,
  LOADING_USER,
} from "../types/authTypes";

export const loginUser = (credentials, redirect) => async (dispatch) => {
  try {
    const user = await axiosWithAuth().post("/auth/login", credentials);
    dispatch({ type: LOGIN_USER, payload: user.data });
    redirect();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};
export const registerUser = (credentials, redirect) => async (dispatch) => {
  try {
    const user = await axiosWithAuth().post("/auth/register", credentials);
    dispatch({ type: REGISTER_USER, payload: user.data });
    redirect();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  }
};
