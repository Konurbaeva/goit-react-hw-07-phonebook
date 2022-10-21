import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { filterContact } from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector'

import { setFilter } from "../../redux/filter/filter-actions";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 3px;
`;

export function Filter() {
// const contactsSelector = useSelector(getFilteredContacts)
const dispatch = useDispatch();
// const filter = useSelector(getFilteredContacts);

// const filter = useSelector(state => state.statusFilter);

const filter = useSelector(getFilteredContacts);

console.log('filter: ', filter)

// const handleSearch = e => {
//   let lowerCase = e.target.value.toLowerCase();
//   setFilter(lowerCase);
// };

// const onFilterContact = e => {
//   let lowerCase = e.target.value.toLowerCase();

//   console.log('onFilterContact: ', lowerCase)

//   const action = filterContact(lowerCase)
//   dispatch(action);
// }

// const handleFilterChange = filter => dispatch(filterContact(filter));

//const handleFilterChange = filter => dispatch(setFilter(filter));

const handleChange = (e) => {
  const { value } = e.target;
  dispatch(setFilter(value));
}

  
  return (
    <div>
      <p>Find contacts by name</p>
      <Input
       // value={onFilterContact}
        // onChange={handleSearch}
        onChange={handleChange}
        placeholder="Search ..."
        type="text"
        name="search"
      />
    </div>
  );
}

// export function Filter({ filter, handleSearch }) {
  
//   return (
//     <div>
//       <p>Find contacts by name</p>
//       <Input
//         value={filter}
//         onChange={handleSearch}
//         placeholder="Search ..."
//         type="text"
//         name="search"
//       />
//     </div>
//   );
// }

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   handleSearch: PropTypes.func.isRequired,
// };
