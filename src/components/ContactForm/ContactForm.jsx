import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

export const ContactForm = ({ onFormSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    onFormSubmit(userData);

    formReset();
  };

  const formReset = () => {
    setUserData({ name: '', number: '' });
  };

  const { name, number } = userData;

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        value={name}
        placeholder="Rosie Simpson"
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel htmlFor="number">Number</FormLabel>
      <FormInput
        value={number}
        onChange={handleChange}
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
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
