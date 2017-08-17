import React from 'react';
import PropTypes from 'prop-types';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (this.props.readonly) return;

    this.props.onTodoUpdate(this.props.todo, {
      completed: event.target.checked,
    });
  }

  deleteItem(event) {
    event.preventDefault();
    if (this.props.readonly) return;

    this.props.onTodoDelete(this.props.todo);
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
      {!this.props.readonly && (
        <a
          onClick={this.deleteItem}
          role="link"
          tabIndex={0}
          style={{ cursor: 'hand', float: 'right' }}
        >
          <i className="fa fa-trash" />
        </a>
      )}
    </div>);
    /* eslint-enable */
  }
}

TodosListItem.propTypes = {
  onTodoUpdate: PropTypes.func,
  onTodoDelete: PropTypes.func,
  todo: PropTypes.objectOf(Object),
  readonly: PropTypes.bool,
};

TodosListItem.defaultProps = {
  onTodoUpdate: () => {},
  onTodoDelete: () => {},
  todo: {},
  readonly: false,
};

export default TodosListItem;
