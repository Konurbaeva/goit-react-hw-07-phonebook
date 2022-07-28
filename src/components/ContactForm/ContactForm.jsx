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

// const ContactSchema = Yup.object().shape({
//   name: Yup.string().required('Required'),
//   number: Yup.string().required('Required'),
// });

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore'
    ),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

// onSubmit

// export const ContactForm = () => (
//   <div>
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={ContactSchema}
//       onSubmit={async values => {
//         await new Promise(r => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <FormBorder>
//         <label htmlFor="name">Name</label>
//         <Input
//           id="name"
//           name="name"
//           placeholder="Enter name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           required
//         />
//         <br />
//         <label htmlFor="number">Number</label>
//         <Input
//           id="number"
//           name="number"
//           placeholder="Enter number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           required
//         />

//         {/* <Button type="submit">Add contact</Button> */}
//         <button type="submit">Add contact</button>
//       </FormBorder>
//     </Formik>
//   </div>
// );

export const ContactForm = ({ onSubmit }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={onSubmit}

      // handleSubmit = (values, { resetForm }) => {
      //   values.id = nanoid();
      //   onAddNewContact(values);
      //   console.log(values);
      //   resetForm();
      // };
    >
      <FormBorder>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <br />
        <label htmlFor="number">Number</label>
        <Input
          id="number"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />

        {/* <Button type="submit">Add contact</Button> */}
        <button type="submit">Add contact</button>
      </FormBorder>
    </Formik>
  </div>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
