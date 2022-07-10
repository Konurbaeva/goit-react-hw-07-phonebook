import styled from 'styled-components';

export function Filter({ filter, handleSearch }) {
  return (
    <div>
      <h3>Find contacts by name</h3>
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
  color: ${props => props.inputColor || 'palevioletred'};
  background: pink;
  border: none;
  border-radius: 3px;
`;
