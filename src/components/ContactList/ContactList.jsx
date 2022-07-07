import { Component } from 'react';
// import { Formik } from 'formik';

// contacts={contacts} deleteContact={this.deleteContact}
export class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
