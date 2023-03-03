import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (friends, filter) => {
    return friends.filter(friend =>
      friend.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const contactsSelectors = {
  getFilter,
  getLoading,
  getFilteredContacts,
};
export default contactsSelectors;
