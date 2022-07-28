import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormBorder = styled(Form)`
  border: ${props => props.theme.borders.normal} black;
  padding: 10px;
  border-radius: 5px;
  width: 320px;
`;

const Input = styled(Field)`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.colors.primary} palevioletred;
  border-radius: 3px;
`;

export const ContactForm = () => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Required'),
        number: Yup.string().required('Required'),
      })}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <FormBorder>
        <label htmlFor="name">Name</label>
        <Input id="name" name="name" placeholder="Provide name" />
        <br />
        <label htmlFor="number">Number</label>
        <Input id="number" name="number" placeholder="Provide number" />

        <Button type="submit">Submit</Button>
      </FormBorder>
    </Formik>
  </div>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
