import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TodosPage from './containers/TodosPage';
import { fetchTodos } from './actions/todoActions';

const store = configureStore();
store.dispatch(fetchTodos());

render(
  <Provider store={store}>
    <TodosPage />
  </Provider>,
  window.document.getElementById('app'), // eslint-disable-line no-undef
);
