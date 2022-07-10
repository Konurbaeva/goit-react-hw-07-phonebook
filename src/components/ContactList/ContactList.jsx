import { Component } from 'react';
// import { Formik } from 'formik';

// contacts={contacts} deleteContact={this.deleteContact}
export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    console.log('props in ContactList: ', contacts);
    return (
      <>
        <h2>Contacts</h2>
        <ul>
          <h3>Find contacts by name</h3>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
