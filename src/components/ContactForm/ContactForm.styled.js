import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 3px;
`;

export const Button = styled.button`
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.colors.primary} palevioletred;
  border-radius: 3px;
`;

export const FormBorder = styled(Form)`
  border: ${props => props.theme.borders.normal} black;
  padding: 10px;
  border-radius: 5px;
  width: 320px;
`;


// export const ErrorText = styled.p`
//   color: red;
// `;

// export const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

// export const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.theme.colors.primary};
//   background: ${props => props.theme.colors.accent};
//   border: none;
//   border-radius: 3px;
// `;

// export const Button = styled.button`
//   font-size: 0.5em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   padding: 0.5em;
//   color: ${props => props.theme.colors.primary};
//   border: ${props => props.theme.colors.primary} palevioletred;
//   border-radius: 3px;
// `;