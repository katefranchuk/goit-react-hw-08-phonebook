import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state);

    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          value={name}
          placeholder="Rosie Simpson"
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput
          value={number}
          onChange={this.handleChange}
          placeholder="459-12-56"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};