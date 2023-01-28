import React, { Component } from 'react';
import ContactForm from './modules/ContactForm/ContactForm';
import ContactList from './modules/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHundler = addedContact => {
    this.setState(prevState => ({
      contacts: [addedContact, ...prevState.contacts],
      }));
  }

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContacts = () => {
    let { contacts, filter } = this.state;
    filter = filter.toLowerCase()
    let filtered = contacts;
    if (filter) {
      filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return filtered;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHundler} contacts={this.state.contacts}/>
        <ContactList
          findContact = {this.findContact}
          contacts = {this.renderContacts()}
          deleteContact = {this.deleteContact}
        />
      </>
    );
  }
}
