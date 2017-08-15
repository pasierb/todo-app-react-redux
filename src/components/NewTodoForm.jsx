import React from 'react';

export default class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.onTodoAdd({
      title: this.state.title
    });
    this.setState({ title: "" });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
