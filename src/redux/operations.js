import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../service/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await api.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkApi) => {
    try {
      const response = await api.addContact(newContact);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await api.removeContact(contactId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
