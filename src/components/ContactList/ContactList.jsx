import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector'
import { useEffect } from 'react';


import { getFilter } from '../../redux/filter/filter-selectors'

import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operations'

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
   const getContacts = useSelector(getFilteredContacts)
   const filterSelector = useSelector(getFilter)
  
  console.log('getContacts: ', getContacts)
  console.log('filterSelector ', JSON.stringify(filterSelector))

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch]);

  const onDeleteContact = (id) => {
    const action = deleteContact(id)
    dispatch(action);
  }


  return getContacts?.map(({ name, number, id }) => {
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
}