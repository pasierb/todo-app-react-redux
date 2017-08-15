export default function todoReducer (state = [], action) {
  switch(action.type) {
    case 'CREATE_TODO':
      return [...state, Object.assign({ id: Date.now() }, action.todo)];
    case 'UPDATE_TODO':
      const index = state.findIndex(todo => todo.id === action.todo.id);
      let newState = [...state];

      newState[index] = Object.assign({}, state[index], action.attributes);

      return newState;
    default:
      return state;
  }
}
