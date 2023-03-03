import axios from 'axios';

// axios.defaults.baseURL = 'https://63fd29d4859df29986cb682f.mockapi.io/api';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const removeContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data.id;
};
