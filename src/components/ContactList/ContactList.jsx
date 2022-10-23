import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector'
import { deleteContact } from '../../redux/contacts/contacts-actions';

// import { filterContact } from "../../redux/filter/filter-actions";

import { filterContact }  from "../../redux/filter/filter-actions";
 import { getFilter } from "../../redux/filter/filter-selectors"

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
  const contactsSelector = useSelector(getFilteredContacts)

   const filter = useSelector(getFilter);
   const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    const action = deleteContact(id)
    dispatch(action);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterContact(value));
}


  console.log('contactsSelector: ', contactsSelector)
  
 return contactsSelector.map(({ name, number, id }) => {
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


// export function ContactList() {
//   const contactsSelector = useSelector(getFilteredContacts)
//   const dispatch = useDispatch();

//   const onDeleteContact = (id) => {
//     const action = deleteContact(id)
//     dispatch(action);
//   }

//  return contactsSelector.map(({ name, number, id }) => {
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

//   // return contactsSelector.map(({ name, number, id }) => {
//   //   return (
//   //     <ul key={id}>
//   //       <li>
//   //         {name} {number}
//   //       </li>
//   //        <Button type="button" onClick={() => onDeleteContact(id)}>
//   //         Delete
//   //       </Button>
//   //     </ul>
//   //   );
//   // });
// }

