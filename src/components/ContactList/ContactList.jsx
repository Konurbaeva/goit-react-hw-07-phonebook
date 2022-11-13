import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector'
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { useEffect } from 'react';

import { fetchContacts } from '../../redux/contacts/contacts-operations'

const Button = styled.button`
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.colors.primary} palevioletred;
  border-radius: 3px;
`;

export function ContactList() {
  // const contactsSelector = useSelector(getFilteredContacts)

  const contactsSelector = useSelector(state=> {console.log(state.contacts.items);return state.contacts.items})
  const dispatch = useDispatch();

  console.log('contacts selector', contactsSelector);


  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch]);

  const onDeleteContact = (id) => {
    const action = deleteContact(id)
    dispatch(action);
  }


    
  return contactsSelector?.map(({ name, number, id }) => {
  return (
    <ul key={id}>
      <li>
        {name} {number}
      </li>
       <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ul>
  );
});


  
//  return contactsSelector?.map(({ name, number, id }) => {
//   return (
//     <ul key={id}>
//       <li>
//         {name} {number}
//       </li>
//        <Button type="button" onClick={() => onDeleteContact(id)}>
//         Delete
//       </Button>
//     </ul>
//   );
// });
}
