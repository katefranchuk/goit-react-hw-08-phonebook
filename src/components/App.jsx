import { Box } from './StyledSystem/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './StyledSystem/Title';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Box p={4} as="section">
      <Title fontSize={32} mb={3} as="h1">
        Phonebook
      </Title>
      <ContactForm />
      <Title fontSize={24} mb={3} as="h2">
        Contacts
      </Title>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>There ara no contacts.</p>
      )}
    </Box>
  );
};
