import { takeEvery, call, select } from "redux-saga/effects";
import * as actions from "./actionTypes";

const saveTasksToLocalStoreage = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

const getTasks = (state) => state.toDoReducer.tasks;

function* saveTasksSaga() {
  const tasks = yield select(getTasks);
  yield call(saveTasksToLocalStoreage, tasks);
}

function* watchTasksActions() {
  yield takeEvery([actions.ADD_TASK, actions.REMOVE_TASK], saveTasksSaga);
}

export function* rootSaga() {
  yield watchTasksActions();
}
