import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import api from '../api';
import * as todoActions from '../actions/todoActions';
import * as actionTypes from '../actions/actionTypes';

function* callFetchTodos() {
  const todos = yield call(api.fetchTodos);

  yield put(todoActions.fetchTodosSucceeded(todos));
}

function* callCreateTodo(action) {
  const todo = yield call(api.createTodo, action.todo);

  yield put(todoActions.createTodoSucceeded(todo));
}

function* callUpdateTodo(action) {
  const todo = yield call(api.updateTodo, action.todo, action.attributes);

  yield put(todoActions.updateTodoSucceeded(todo));
}

function* callDeleteTodo(action) {
  const todo = yield call(api.deleteTodo, action.todo);

  yield put(todoActions.deleteTodoSucceeded(todo));
}

export default function* todoSaga() {
  yield takeEvery(actionTypes.TODO_CREATE, callCreateTodo);
  yield takeEvery(actionTypes.TODO_UPDATE, callUpdateTodo);
  yield takeEvery(actionTypes.TODO_DELETE, callDeleteTodo);
  yield takeLatest(actionTypes.TODOS_FETCH, callFetchTodos);
}
