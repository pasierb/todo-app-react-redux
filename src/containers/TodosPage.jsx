import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodosList from '../components/TodosList';
import NewTodoForm from '../components/NewTodoForm';
import * as todoActions from '../actions/todoActions';

/* eslint-disable react/prefer-stateless-function, react/jsx-boolean-value */
class TodosPage extends React.Component {
  render() {
    return (<div className="row">
      <div className="column">
        <h3>Edit</h3>
        <TodosList
          todos={this.props.todos}
          onTodoUpdate={this.props.updateTodo}
          onTodoDelete={this.props.deleteTodo}
        />
        <NewTodoForm onTodoAdd={this.props.createTodo} />
      </div>
      <div className="column">
        <h3>Readonly</h3>
        <TodosList todos={this.props.todos} readonly={true} />
      </div>
    </div>);
  }
}
/* eslint-enable */

TodosPage.propTypes = {
  todos: PropTypes.arrayOf(Object),
  updateTodo: PropTypes.func,
  createTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodosPage.defaultProps = {
  todos: [],
  updateTodo: () => {},
  createTodo: () => {},
  deleteTodo: () => {},
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: todo => dispatch(todoActions.createTodo(todo)),
    updateTodo: (todo, attributes) => dispatch(todoActions.updateTodo(todo, attributes)),
    deleteTodo: todo => dispatch(todoActions.deleteTodo(todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
