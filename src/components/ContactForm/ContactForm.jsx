import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
// import * as Yup from 'yup';
import styled from 'styled-components';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      ...this.state,
    };
    this.props.onSubmit(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Formik

      // validationSchema={Yup.object().shape({
      //   name: Yup.string().required('Required'),
      // })}
      >
        <FormBorder onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              placeholder="Enter number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <Button type="submit">Add contact</Button>
        </FormBorder>
      </Formik>
    );
  }
}

const FormBorder = styled(Form)`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  width: 320px;
`;

const Input = styled(Field)`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: pink;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
