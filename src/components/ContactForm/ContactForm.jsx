import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
import * as yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

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

const schema = yup.object().shape({
  id: yup.string().min(2).max(16).required(),
  name: yup.string().min(2).max(16).required(),
  number: yup.string().min(2).max(16).required(),
});

export const ContactForm = ({ onSubmit }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        values.id = nanoid();
        onSubmit(values);

        resetForm();
      }}
    >
      <FormBorder>
        <label htmlFor="name">Name</label>
        <Input id="name" name="name" placeholder="Enter name" />
        <br />
        <label htmlFor="number">Number</label>
        <Input id="number" name="number" placeholder="Enter number" />
        <Button type="submit">Add contact</Button>
      </FormBorder>
    </Formik>
  </div>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
