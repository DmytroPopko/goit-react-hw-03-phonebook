import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './components/Container';
import { SectionTitle } from 'components/SectionTitle';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = opt => {
    const contact = {
      id: nanoid(),
      name: opt.name,
      number: opt.number,
    };

    const hasContact = this.state.contacts.find(
      option => option.name === contact.name
    );
    if (hasContact === undefined) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else {
      alert(`${contact.name} is already in contacts?`);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <SectionTitle title={'Phonebook'}></SectionTitle>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <SectionTitle title={'Contacts'}></SectionTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts !== undefined ? (
          <ContactList
            contacts={visibleTodos}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          ''
        )}
      </Container>
    );
  }
}

export default App;
