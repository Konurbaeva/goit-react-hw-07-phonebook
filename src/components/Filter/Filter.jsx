import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from "../../redux/filter/filter-selectors"

import { filterContacts } from '../../redux/filter/filter-slice'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 3px;
`;

export function Filter() {
 const filter = useSelector(getFilter);
const dispatch = useDispatch();

const handleChange = (e) => {
  const { value } = e.target;
 const action = filterContacts(value)
 dispatch(action);
}

  return (
    <div>
      <p>Find contacts by name</p>
      <Input
        onChange={handleChange}
        placeholder="Search ..."
        type="text"
        name="filter" 
        value={filter} 
      />
    </div>
  );
}