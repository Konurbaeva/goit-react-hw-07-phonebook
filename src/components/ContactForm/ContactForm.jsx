
import { FormBorder, Input, Button } from './ContactForm.styled';
import {  useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contacts/contacts-actions';

export function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addNewContact(form.elements.name.value, form.elements.number.value));
  };

  return (
    <FormBorder onSubmit={handleSubmit}>
      Name
      <Input
        placeholder="Enter name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      Number
      <Input
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