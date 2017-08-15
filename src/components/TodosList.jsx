import React from 'react';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTodoUpdate(this.props.todo, {
      completed: event.target.checked
    });
  }

  render() {
    const todo = this.props.todo;
    const style = {
      textDecoration: todo.completed ? 'line-through' : 'none'
    }

    return (<div style={style}>
      <input type="checkbox" checked={todo.completed} onChange={this.handleChange} />
      {todo.title}
    </div>);
  }
}

export default function TodosList(props) {
  const activeTodos = props.todos.filter(todo => !todo.completed);
  const completedTodos = props.todos.filter(todo => todo.completed);

  return (
    <div>
      {activeTodos.map((todo, i) => <TodosListItem todo={todo} key={todo.id} onTodoUpdate={props.onTodoUpdate} />)}
      {completedTodos.map((todo, i) => <TodosListItem todo={todo} key={todo.id} onTodoUpdate={props.onTodoUpdate} />)}
    </div>
  );
}
