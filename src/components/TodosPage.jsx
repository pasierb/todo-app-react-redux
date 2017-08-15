import React from 'react';
import { connect } from 'react-redux';
import TodosList from './TodosList';
import NewTodoForm from './NewTodoForm';
import * as todoActions from '../actions/todoActions';

class TodosPage extends React.Component {
  render() {
    return (<div>
      <TodosList todos={this.props.todos} onTodoUpdate={this.props.updateTodo} />
      <NewTodoForm onTodoAdd={this.props.createTodo} />
    </div>)
  }
}

function mapStateToProps(state, props) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: todo => dispatch(todoActions.createTodo(todo)),
    updateTodo: (todo, attributes) => dispatch(todoActions.updateTodo(todo, attributes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
