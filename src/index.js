import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TodosPage from './components/TodosPage';

const store = configureStore();

render(
  <Provider store={store}>
    <TodosPage />
  </Provider>,
  document.getElementById('app')
);
