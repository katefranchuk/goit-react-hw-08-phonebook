import { nanoid } from 'nanoid';
import localStorage from 'service/localStorage';
import { Box } from './StyledSystem/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './StyledSystem/Title';
import { capitalizeFirstLetter } from './utils/capitalizeFirstLetter';
import { useEffect, useState } from 'react';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    localStorage.load('contacts') ?? CONTACTS
  ); //якщо null, то повертаємо дефолтний масив
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.save('contacts', contacts); // при зміні contacts оновлюємо localStorage
  }, [contacts]);

  const formSubmitHendler = data => {
    const { name, number } = data;
    // уникаємо мутації початкового стану
    const normalizedContactName = name.toLowerCase();
    const capitalizedContactName = capitalizeFirstLetter(name);

    contacts.some(
      contact => contact.name.toLowerCase() === normalizedContactName
    )
      ? alert(`${capitalizedContactName} is already in contacts`)
      : setContacts([
          ...contacts,
          { id: nanoid(), name: capitalizedContactName, number },
        ]);
  };

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactID => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactID));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Box p={4} as="section">
      <Title fontSize={32} mb={3} as="h1">
        Phonebook
      </Title>
      <ContactForm onFormSubmit={formSubmitHendler} />
      {/* отримуємо фіналні дані на момент submit-y */}
      <Title fontSize={24} mb={3} as="h2">
        Contacts
      </Title>
      <Filter filterValue={filter} onInputChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};
