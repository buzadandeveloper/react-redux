import * as actions from "./actionTypes";

export const addTask = (task) => {
  return {
    type: actions.ADD_TASK,
    payload: task,
  };
};

export const removeTask = (id) => {
    return {
        type: actions.REMOVE_TASK,
        payload: id
    }
}