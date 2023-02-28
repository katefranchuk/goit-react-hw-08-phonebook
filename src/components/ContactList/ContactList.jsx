import {
  ContactListEl,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts, selectLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  if (!contacts.length) return;
  return (
    <>
      {loading ? (
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
