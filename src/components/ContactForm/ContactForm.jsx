import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button
} from './ContactForm.styled';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact, deleteContact } from "../../redux/store"

export function ContactForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const value = useSelector(state => state.value)
  const dispatch = useDispatch();


  const reset = () => {
    setName('');
    setNumber('');
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onFormSubmit({ name, number });
  //   reset();
  // };

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      console.log(form.elements);
      // dispatch(addNewContact(form.elements.login.value));

     //  form.elements.name.value
      //  form.elements.number.value
      dispatch(addNewContact({
         name, 
         number
      }));
      reset();
  };



  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(number));
  }, [number]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      Name
      <Input
        value={name}
        onChange={handleChangeName}
        placeholder="Enter name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      Number
      <Input
        value={number}
        onChange={handleChangeNumber}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
