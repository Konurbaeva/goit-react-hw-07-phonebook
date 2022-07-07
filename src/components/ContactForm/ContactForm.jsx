import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: 'John',
  number: '123',
};
// name={name} addContact={this.addContact}
export class ContactForm extends Component {
  onChange = e => {
    // this.setState({ value: e.target.value });
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { name } = this.state;
    // this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...initialValues });
  };

  render() {
    const { name, number } = this.props;
    // console.log(name);
    // name={name} addContact={this.addContact}
    console.log(this.props.name);

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Required'),
        })}
      >
        <Form>
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            <Field
              type="tel"
              name="number"
              placeholder="Enter number"
              value={number}
              onChange={this.onChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" onSubmit={this.props.addContact}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}
