import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, id: nanoid(), number: this.state.number },
        ],
      };
    });
  };

  render() {
    return (
      <>
        <ContactForm
         
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
