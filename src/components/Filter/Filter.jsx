import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from "../../redux/filter/filter-actions";
import { getFilter } from "../../redux/filter/filter-selectors"

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

console.log('filter: ', filter)

const handleChange = (e) => {
  const { value } = e.target;
 const action = filterContact(value)
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
