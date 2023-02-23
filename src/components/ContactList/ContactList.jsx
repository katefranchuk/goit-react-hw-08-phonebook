import PropTypes from 'prop-types';
import {
  ContactListEl,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
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
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func,
};
