import { takeEvery, call, put } from 'redux-saga/effects';
import api from '../api';
import * as todoActions from '../actions/todoActions';
import * as actionTypes from '../actions/actionTypes';

function* callCreateTodo(action) {
  const user = yield call(api.createTodo, action.todo);

  yield put(todoActions.createTodoSucceeded(user));
}

function* callUpdateTodo(action) {
  const promise = yield call(api.updateTodo, action.todo, action.attributes);

  yield put(todoActions.updateTodoSucceeded(promise));
}

function* callDeleteTodo(action) {
  const promise = yield call(api.deleteTodo, action.todo);

  yield put(todoActions.deleteTodoSucceeded(promise));
}

export default function* todoSaga() {
  yield takeEvery(actionTypes.TODO_CREATE, callCreateTodo);
  yield takeEvery(actionTypes.TODO_UPDATE, callUpdateTodo);
  yield takeEvery(actionTypes.TODO_DELETE, callDeleteTodo);
}
