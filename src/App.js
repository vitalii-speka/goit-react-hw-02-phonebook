import React, { Component } from 'react';
import Section from './Section';
import Phonebook from './Phonebook';

const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

class App extends Component {
  state = {
    contacts: [],
    // filtr: '',
    name: '',
    number: '',
  };

  handleCheange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const name = 'Ivan Pupkin';
    return (
      <>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleCheange}
            />
          </label>
          <label>
            Number
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleCheange}
            />
          </label>

          <button
            key={uuidv4()}
            type="submit"
            // onClick={onLeaveFeedback}
          >
            Add contact
          </button>
        </form>

        <Section title="Phonebook">
          <Phonebook name={name} id={uuidv4()} />
        </Section>
        <Section title="Contacts"></Section>
      </>
    );
  }
}

export default App;
