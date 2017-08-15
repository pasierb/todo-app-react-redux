import React from 'react';
import PropTypes from 'prop-types';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTodoUpdate(this.props.todo, {
      completed: event.target.checked,
    });
  }

  render() {
    const todo = this.props.todo;
    const style = {
      textDecoration: todo.completed ? 'line-through' : 'none',
    };

    return (<div>
      <label className="label-inline" style={style} htmlFor="input">
        {this.props.onTodoUpdate && (
          <input type="checkbox" checked={todo.completed} onChange={this.handleChange} />
        )}
        {todo.title}
      </label>
    </div>);
  }
}

TodosListItem.propTypes = {
  onTodoUpdate: PropTypes.func,
  todo: PropTypes.object.required,
};

TodosListItem.defaultProps = {
  onTodoUpdate: null,
  todo: {},
};

function TodosList(props) {
  const activeTodos = props.todos.filter(todo => !todo.completed);
  const completedTodos = props.todos.filter(todo => todo.completed);

  return (
    <div>
      {activeTodos.map(todo => (
        <TodosListItem todo={todo} key={todo.id} onTodoUpdate={props.onTodoUpdate} />
      ))}
      {completedTodos.map(todo => (
        <TodosListItem todo={todo} key={todo.id} onTodoUpdate={props.onTodoUpdate} />
      ))}
    </div>
  );
}

TodosList.propTypes = {
  todos: PropTypes.array.required,
  onTodoUpdate: PropTypes.func,
};

TodosList.defaultProps = {
  todos: [],
  onTodoUpdate: null,
};

export default TodosList;
