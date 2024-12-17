import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "./actionType";

const initialState = {
  tasks: [],
};

function Tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_el, i) => i !== action.payload.id),
      };
    case UPDATE_TASK:
      return state.tasks.map((task, index) => {
        if (index === action.payload.id) {
          return {
            name: action.payload.name,
            userId: action.payload.userId,
            date: action.payload.date,
          };
        } else return task;
      });
    default:
      return state;
  }
}

export default Tasks;
