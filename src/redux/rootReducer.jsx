import { combineReducers } from "redux";
import { toDoReducer } from "./toDoReducer";

export const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action:", action);
  if (action.type === "ADD_TASK") {
    action.payload =
      action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
  }
  return next(action);
};

const rootReducer = combineReducers({
  toDoReducer,
});

export default rootReducer;
