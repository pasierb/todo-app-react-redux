import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodosList from './TodosList';
import NewTodoForm from './NewTodoForm';
import * as todoActions from '../actions/todoActions';

class TodosPage extends React.Component {
  render() {
    return (<div className="row">
      <div className="column column-50">
        <h3>Edit</h3>
        <TodosList todos={this.props.todos} onTodoUpdate={this.props.updateTodo} />
        <NewTodoForm onTodoAdd={this.props.createTodo} />
      </div>
      <div className="column column-50">
        <h3>Readonly</h3>
        <TodosList todos={this.props.todos} readonly={true} />
      </div>
    </div>);
  }
}

TodosPage.propTypes = {
  todos: PropTypes.arrayOf(Object),
  updateTodo: PropTypes.func,
  createTodo: PropTypes.func,
};

TodosPage.defaultProps = {
  todos: [],
  updateTodo: () => {},
  createTodo: () => {},
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
