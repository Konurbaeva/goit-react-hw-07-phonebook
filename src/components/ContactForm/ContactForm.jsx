
import { FormBorder, Input, Button } from './ContactForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  useDispatch, useSelector } from 'react-redux';
import { addNewContact } from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector'

export function ContactForm() {

  const contactsSelector = useSelector(getFilteredContacts)
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const contactExists = contactsSelector.find(item => item.name === form.elements.name.value)

    if(contactExists) { 
      toast.warn('🦄 Contact exists!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      return
    }
    const action = addNewContact(form.elements.name.value, form.elements.number.value)
    dispatch(action);
    form.reset();
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
      <ToastContainer />
      <Button type="submit">Add contact</Button>
    </FormBorder>
  );
}