import { combineReducers } from "redux";
import counterReducer from "./Counter/counterReducer";

var rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
