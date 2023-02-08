import PropTypes from 'prop-types';
import {
  ContactListEl, ContactListItem,
  ContactListButton,
} from './ContactList.styled'; 

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListEl>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <ContactListButton
            type="button"
            onClick={() => onDeleteContact(id)}
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
