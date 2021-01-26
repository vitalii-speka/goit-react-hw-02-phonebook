import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from './componets/ContactForm';
import ContactList from './componets/ContactList';
import Filter from './componets/Filter';

// console.log(uuidv4());

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Oleg Pupkin', number: '459-12-56' },
      { id: 'id-2', name: 'Nastyshka Opasnost', number: '443-89-12' },
      { id: 'id-3', name: 'Gore Programist', number: '645-17-79' },
      { id: 'id-4', name: 'Ruki Kryki', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = task => {
    const contact = {
      ...task,
      // id: uuidv4(),
      id: task.name,
    };

    // if (task.name === 0) {
    //   this.showNotification('Please enter contact name');
    //   return;
    // }

    // if (task.number === 0) {
    //   this.showNotification('Please enter contact number');
    //   return;
    // }

    // const hasContact = this.state.contacts.some(
    //   contact => contact.name === task.name,
    // );

    // hasContact
    //   ? this.showNotification(`${task.name} is already in contacts`)
    //   : this.setState(prevState => ({
    //       contacts: [...prevState.contacts, contact],
    //     }));

    const searchSameName = this.state.contacts
      .map(cont => cont.name)
      .includes(task.name);

    // if (task.name === 0) {
    //   alert(`${task.name} is already in contacts`);
    //   return;
    // }

    // if (task.number === 0) {
    //   alert(`${task.number} is already in number`);
    //   return;
    // }

    // if (searchSameName) {
    //   alert(`${task.name} is already in contacts`);
    // } else if (task.name.length === 0) {
    //   alert('Fields must be filled!');
    // } else {
    //   this.setState(prevState => ({
    //     contacts: [...prevState.contacts, contact],
    //   }));
    // }

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        {/* вариант 1 - скрытый поиск по имени ==> не нравится отображеие! */}
        {/* {visibleContacts.length >= 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )} */}

        <Filter value={filter} onChangeFilter={this.changeFilter} />

        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}

export default App;
