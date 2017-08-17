import React from 'react';
import PropTypes from 'prop-types';
import TodosListItem from './TodosListItem';

function TodosList(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return (<TodosListItem
          readonly={props.readonly}
          todo={todo}
          key={todo.id}
          onTodoUpdate={props.onTodoUpdate}
          onTodoDelete={props.onTodoDelete}
        />);
      })}
    </div>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(Object),
  onTodoUpdate: PropTypes.func,
  onTodoDelete: PropTypes.func,
  readonly: PropTypes.bool,
};

TodosList.defaultProps = {
  todos: [],
  onTodoUpdate: () => {},
  onTodoDelete: () => {},
  readonly: false,
};

export default TodosList;
