import { createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { applyMiddleware } from "redux";
import { myLogger } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(myLogger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
