import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';


export const Filter = ({ filterValue, onInputChange }) => {
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filterValue}
        onChange={onInputChange}
      />
    </>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onInputChang: PropTypes.func,
};


