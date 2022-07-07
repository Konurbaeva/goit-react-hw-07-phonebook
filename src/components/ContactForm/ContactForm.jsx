import { Component } from 'react';
import { Formik, Form } from 'formik';

// export class ContactForm extends Component {
//   handleSubmit = e => {};

//   onChange = e => {
//     this.setState({ name: e.target.value });
//   };

//   render() {
//     const { name } = this.props;
//     console.log('this.props: ', this.props);
//     return (
//       <Formik onSubmit={this.handleSubmit}>
//         <label htmlFor="name" style={{ display: 'block' }}>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.onChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//       </Formik>
//     );
//   }
// }

const initialValues = {
  name: 'John',
  number: '123',
};
export class ContactForm extends Component {
  onChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { login, email, password } = this.state;
  //   console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
  //   this.props.onSubmit({ ...this.state });
  //   this.reset();
  // };
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

    return (
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
        <Form>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            <input
              type="tel"
              name="number"
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
