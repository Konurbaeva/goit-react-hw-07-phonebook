import { Component } from 'react';
import { Formik } from 'formik';

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

// Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
// Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  onChange = e => {
    const { name, value } = e.target;
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
    const { name } = this.state;
    console.log(`Login: ${name}`);
    // this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
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
        <label>
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
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
