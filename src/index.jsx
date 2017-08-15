import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TodosPage from './components/TodosPage';

const store = configureStore({
  todos: [
    { id: 1, title: 'Write test' },
    { id: 2, title: 'Make validations' },
    { id: 3, title: 'Add local storage' },
  ],
});

render(
  <Provider store={store}>
    <TodosPage />
  </Provider>,
  window.document.getElementById('app'),
);
