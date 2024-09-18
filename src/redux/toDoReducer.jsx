import * as actions from "./actionTypes";

export const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TASK:
      return [
        ...state,
        {
          id: state.length + 1,
          description: action.payload,
        },
      ];
    case actions.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};
