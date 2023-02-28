import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

import { nanoid } from 'nanoid';
import { capitalizeFirstLetter } from 'components/utils/capitalizeFirstLetter';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    number: '',
  });

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const capitalizedContactName = capitalizeFirstLetter(userData.name);

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === userData.name.toLowerCase()
    );
    if (isExist) {
      alert(`${capitalizedContactName} is already in contacts`);
      return;
    }
    dispatch(
      addContact({ ...userData, name: capitalizedContactName, id: nanoid() })
    );
    // dispatch(
    //   addContact({  name: capitalizedContactName, id: nanoid() })
    // );
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
        placeholder="385-928-7370"
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
