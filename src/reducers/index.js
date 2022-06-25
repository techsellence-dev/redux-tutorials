import counterReducer from "./counter";
import isLoggedInReducer from "./isLoggedIn";
import {combineReducers} from "redux";

const allReducers = combineReducers({counterReducer, isLoggedInReducer});
export default allReducers;