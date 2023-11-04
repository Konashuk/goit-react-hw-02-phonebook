import { ContactForm } from 'components/contactForm/contactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class Phonebooks extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = newContact => {
    const contact = { ...newContact, id: nanoid() };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
        name: '',
        number: '',
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, number, id }) => {
            return <li key={id}>{`${name}:${number}`}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Phonebooks;
