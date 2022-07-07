import { Component } from 'react';
import { Formik } from 'formik';

export class ContactForm extends Component {
  handleSubmit = e => {};

  onChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.props;
    console.log('this.props: ', this.props);
    return (
      <Formik onSubmit={this.handleSubmit}>
        <label htmlFor="name" style={{ display: 'block' }}>
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
      </Formik>
    );
  }
}
