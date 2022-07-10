import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Filter({ filter, handleSearch }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <Input
        value={filter}
        onChange={handleSearch}
        placeholder="Search ..."
        type="text"
        name="search"
      />
    </div>
  );
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 3px;
`;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
