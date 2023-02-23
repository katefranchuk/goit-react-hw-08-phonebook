import { FilterLabel, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

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
        value={filterValue}
        onChange={handleFilterChange}
      />
    </>
  );
};
