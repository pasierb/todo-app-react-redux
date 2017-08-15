export function createTodo(todo) {
  return { type: 'CREATE_TODO', todo }
}

export function updateTodo(todo, attributes) {
  return { type: 'UPDATE_TODO', todo, attributes }
}
