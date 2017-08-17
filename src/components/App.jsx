import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import TodosPage from './TodosPage';
import api from '../api';

api.getTodos().then((todos) => {
  const store = configureStore({ todos });

  render(
    <Provider store={store}>
      <TodosPage />
    </Provider>,
    window.document.getElementById('app'), // eslint-disable-line no-undef
  );
});
