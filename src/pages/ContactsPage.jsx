import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useContacts } from 'hooks/useContacts';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsOperations';
import { Box } from 'styledSystem/Box';
import { Title } from 'styledSystem/Title';

const ContactsPage = () => {
  const { isLoading, contacts } = useContacts();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box p={4} as="section">
      <Container>
        <Title fontSize={32} mb={3} as="h1">
          Phonebook
        </Title>
        <ContactForm />
        <Title fontSize={24} mb={3} as="h2">
          Contacts
        </Title>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {contacts.length !== 0 ? (
              <>
                <Filter />
                <ContactList />
              </>
            ) : (
              <p>There are no contacts.</p>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default ContactsPage;
