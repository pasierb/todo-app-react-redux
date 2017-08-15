import React from 'react';
import PropTypes from 'prop-types';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.readonly) return;

    this.props.onTodoUpdate(this.props.todo, {
      completed: event.target.checked,
    });
  }

  render() {
    const todo = this.props.todo;
    const style = {
      textDecoration: todo.completed ? 'line-through' : 'none',
    };

    /* eslint-disable jsx-a11y/label-has-for */
    return (<div>
      <label className="label-inline" style={style}>
        {!this.props.readonly && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleChange}
          />
        )}
        {todo.title}
      </label>
    </div>);
    /* eslint-enable */
  }
}

TodosListItem.propTypes = {
  onTodoUpdate: PropTypes.func,
  todo: PropTypes.objectOf(Object),
  readonly: PropTypes.bool,
};

TodosListItem.defaultProps = {
  onTodoUpdate: () => {},
  todo: {},
  readonly: false,
};

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
