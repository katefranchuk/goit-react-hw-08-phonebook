import {
  ContactListEl,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';

import { useDispatch } from 'react-redux';

import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
  const { isLoading, contacts } = useContacts();
  const dispatch = useDispatch();

  if (!contacts.length) return;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContactListEl>
          {contacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              <p>
                {name}: {number}
              </p>
              <ContactListButton
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </ContactListButton>
            </ContactListItem>
          ))}
        </ContactListEl>
      )}
    </>
  );
};
