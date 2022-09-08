import { useEffect, useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  useEffect(() => {
    // where to put prevProps, prevState?
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (contacts.find(({ name }) => contact.name === name))
      return alert(`name is already in contacts`);
    if (contacts.find(({ number }) => contact.number === number))
      return alert(`number is already in contacts`);

    setContacts(prevState => [...prevState.contacts, contact]);
  };

  const deleteContact = contactId => {
    // setContacts(prevState =>
    //   prevState.contacts.filter(contact => contact.id !== contactId)
    // );
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    form.reset();
  };

  const handleSearch = e => {
    const searchQuery = e.currentTarget.value;

    setFilter(searchQuery);
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}
