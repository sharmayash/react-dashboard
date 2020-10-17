import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import offenseReducer from "./offenseReducer";

export default combineReducers({
  offense: offenseReducer,
  errors: errorReducer,
});
