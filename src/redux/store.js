import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(...middleware) // uncomment this for production
  composeWithDevTools(applyMiddleware(...middleware)) // comment this line for production
);

export default store;
