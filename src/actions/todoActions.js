import * as actionTypes from './actionTypes';

export function createTodo(todo) {
  return { type: actionTypes.TODO_CREATE, todo };
}

export function createTodoSucceeded(todo) {
  return { type: actionTypes.TODO_CREATE_SUCCEEDED, todo };
}

export function updateTodo(todo, attributes) {
  return { type: actionTypes.TODO_UPDATE, todo, attributes };
}

export function updateTodoSucceeded(todo) {
  return { type: actionTypes.TODO_UPDATE_SUCCEEDED, todo };
}

export function deleteTodo(todo) {
  return { type: actionTypes.TODO_DELETE, todo };
}

export function deleteTodoSucceeded(todo) {
  return { type: actionTypes.TODO_DELETE_SUCCEEDED, todo };
}
