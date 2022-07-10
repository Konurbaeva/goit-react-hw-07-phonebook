import { Component } from 'react';
// import { Formik } from 'formik';
import styled from 'styled-components';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <>
        <h2>Contacts</h2>
        <UlList>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
            </li>
          ))}
        </UlList>
      </>
    );
  }
}

const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const UlList = styled.ul`
  list-style: none;
`;
