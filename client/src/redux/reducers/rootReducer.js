import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  userData: authReducer,
});

export default rootReducer;
