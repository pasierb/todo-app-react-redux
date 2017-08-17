import React from 'react';
import PropTypes from 'prop-types';
import TodosListItem from './TodosListItem';

function TodosList(props) {
  const activeTodos = props.todos.filter(todo => !todo.completed);
  const completedTodos = props.todos.filter(todo => todo.completed);

  return (
    <div>
      {[activeTodos, completedTodos].map(todos => todos.map(todo => (
        <TodosListItem
          readonly={props.readonly}
          todo={todo}
          key={todo.id}
          onTodoUpdate={props.onTodoUpdate}
          onTodoDelete={props.onTodoDelete}
        />
      )))}
    </div>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(Object),
  onTodoUpdate: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  readonly: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
};

TodosList.defaultProps = {
  todos: [],
  onTodoUpdate: () => {},
  readonly: false,
};

export default TodosList;
