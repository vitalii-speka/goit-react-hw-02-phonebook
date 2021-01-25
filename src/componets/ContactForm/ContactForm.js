import styles from './ContactForm.module.css';
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

    this.props.onAddContact({ ...this.state });

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
        <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
          <label className={styles.TaskEditor_label} htmlFor={this.nameInputId}>
            Name
            <input
              className={styles.TaskEditor_input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleCheange}
            />
          </label>
          <label
            className={styles.TaskEditor_label}
            htmlFor={this.numberInputId}
          >
            Number
            <input
              className={styles.TaskEditor_input}
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleCheange}
            />
            <button className={styles.TaskEditor_button} type="submit">
              Add contact
            </button>
          </label>
        </form>
      </>
    );
  }
}

export default ContactForm;
