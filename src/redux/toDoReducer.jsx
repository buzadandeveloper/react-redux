import * as actions from "./actionTypes";

const initialState = {
  tasks: [],
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            description: action.payload,
          },
        ],
      };
    case actions.REMOVE_TASK: {
      const updateTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );

      return {
        ...state,
        tasks: updateTasks.map((t, index) => ({
          ...t,
          id: index + 1,
        })),
      };
    }

    default:
      return state;
  }
};
