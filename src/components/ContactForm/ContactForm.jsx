import { Component } from 'react';
import { Formik } from 'formik';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {};

  onChange = e => {
    console.log(e);
    this.setState({ value: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <Formik onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Formik>
    );
  }
}
