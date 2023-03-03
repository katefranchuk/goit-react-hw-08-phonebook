import { useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  const isLoading = useSelector(contactsSelectors.getLoading);
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  return {
    isLoading,
    filter,
    contacts,
  };
};
