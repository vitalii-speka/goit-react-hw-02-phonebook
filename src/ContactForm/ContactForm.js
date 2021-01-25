// import { render } from '@testing-library/react';
import { Component } from 'react';
const { v4: uuidv4 } = require('uuid');

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleCheange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleCheange}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleCheange}
            />
            <button type="submit">Add contact</button>
          </label>
        </form>
      </>
    );
  }
}

export default ContactForm;
