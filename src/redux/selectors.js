import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (friends, filter) => {
    return friends.filter(friend =>
      friend.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
