import * as actionTypes from '../actions/actionTypes';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.TODO_CREATE_SUCCEEDED: {
      return [...state, action.todo];
    }
    case actionTypes.TODO_UPDATE_SUCCEEDED: {
      const index = state.findIndex(todo => todo.id === action.todo.id);
      const newState = [...state];

      newState[index] = action.todo;

      return newState;
    }
    case actionTypes.TODO_DELETE_SUCCEEDED: {
      const index = state.findIndex(todo => todo.id === action.todo.id);
      const newState = [...state];

      newState.splice(index, 1);

      return newState;
    }
    case actionTypes.TODOS_FETCH_SUCCEEDED: {
      return action.todos;
    }
    default: {
      return state;
    }
  }
}
