import React from 'react';
import PropTypes from 'prop-types';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onTodoAdd({
      title: this.state.title,
    });
    this.setState({ title: '' });
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleChange} />
          <input type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    );
  }
}

NewTodoForm.propTypes = {
  onTodoAdd: PropTypes.func,
};

NewTodoForm.defaultProps = {
  onTodoAdd: () => {},
};

export default NewTodoForm;
