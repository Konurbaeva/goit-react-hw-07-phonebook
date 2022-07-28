import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

import { FormBorder, Input, FormError, Button } from './ContactForm.styled';

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
        <FormError name="name" />
        <br />
        <label htmlFor="number">Number</label>
        <Input id="number" name="number" placeholder="Enter number" />
        <FormError name="number" />
        <Button type="submit">Add contact</Button>
      </FormBorder>
    </Formik>
  </div>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
