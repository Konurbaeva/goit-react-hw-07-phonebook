import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector'

const Button = styled.button`
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.colors.primary} palevioletred;
  border-radius: 3px;
`;

export function ContactList({ deleteContact }) {
  // const value = useSelector(state => state.contacts);
  const contactsSelector = useSelector(getFilteredContacts)
  const dispatch = useDispatch();

  console.log('dispatch: ', dispatch.actions);

  return contactsSelector.map(({ name, number, id }) => {
    return (
      <ul key={id}>
        <li>
          {name} {number}
        </li>
        {/* <Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </Button> */}
         <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </ul>
    );
  });
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};