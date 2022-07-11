import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (this.state.contacts.find(({ name }) => contact.name === name))
      return alert(`name is already in contacts`);
    if (this.state.contacts.find(({ number }) => contact.number === number))
      return alert(`number is already in contacts`);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    form.reset();
  };

  handleSearch = e => {
    const searchQuery = e.currentTarget.value;
    this.setState({ filter: searchQuery });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleSearch={this.handleSearch} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
