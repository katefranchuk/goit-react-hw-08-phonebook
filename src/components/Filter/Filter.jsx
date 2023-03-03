import { FilterLabel, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { useContacts } from 'hooks/useContacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};
