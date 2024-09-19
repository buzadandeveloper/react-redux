import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import { myLogger } from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
