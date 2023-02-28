import { Box } from './StyledSystem/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './StyledSystem/Title';
import { selectContacts, selectLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box p={4} as="section">
      <Title fontSize={32} mb={3} as="h1">
        Phonebook
      </Title>
      <ContactForm />
      <Title fontSize={24} mb={3} as="h2">
        Contacts
      </Title>
      {loading ? (
        <Loader />
      ) : (
        <>
          {contacts.length !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p>There ara no contacts.</p>
          )}
        </>
      )}
    </Box>
  );
};
