import { nanoid } from 'nanoid';
import { Component } from 'react';
import localStorage from 'service/localStorage';
import { Box } from './StyledSystem/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './StyledSystem/Title';
import { capitalizeFirstLetter } from './utils/capitalizeFirstLetter';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.load('contacts') ?? CONTACTS; //якщо null, то повертаємо дефолтний масив
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.save('contacts', this.state.contacts);
    }
  }

  formSubmitHendler = data => {
    const { name, number } = data;
    // уникаємо мутації початкового стану
    const normalizedContactName = name.toLowerCase();
    const capitalizedContactName = capitalizeFirstLetter(name);

    this.setState(({ contacts }) =>
      contacts.some(
        contact => contact.name.toLowerCase() === normalizedContactName
      )
        ? alert(`${capitalizedContactName} is already in contacts`)
        : {
            contacts: [
              ...contacts,
              { id: nanoid(), name: capitalizedContactName, number },
            ],
          }
    );
  };

  handleFilterChange = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactID),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <Box p={4} as="section">
        <Title fontSize={32} mb={3} as="h1">
          Phonebook
        </Title>
        <ContactForm onFormSubmit={this.formSubmitHendler} />
        {/* отримуємо фіналні дані на момент submit-y */}
        <Title fontSize={24} mb={3} as="h2">
          Contacts
        </Title>
        <Filter filterValue={filter} onInputChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
