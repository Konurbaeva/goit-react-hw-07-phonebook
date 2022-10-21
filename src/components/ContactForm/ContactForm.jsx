
import { FormBorder, Input, Button } from './ContactForm.styled';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contacts/contacts-actions';

export function ContactForm() {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addNewContact(form.elements.name.value, form.elements.number.value));
  };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(name));
  // }, [name]);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(number));
  // }, [number]);

  // const handleChangeName = e => {
  //   setName(e.target.value);
  // };

  // const handleChangeNumber = e => {
  //   setNumber(e.target.value);
  // };

  return (
    <FormBorder onSubmit={handleSubmit}>
      Name
      <Input
       // value={name}
       // onChange={handleChangeName}
        placeholder="Enter name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      Number
      <Input
       // value={number}
       // onChange={handleChangeNumber}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </FormBorder>
  );
}