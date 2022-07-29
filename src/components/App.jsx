import React, { Component } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // event.preventDefault();
    // console.log(event.target);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        {/* <ContactForm
          value={this.state.name}
          // buttonName="Add contact"
          onChange={this.handleInputValue}
        /> */}
      </>
    );
  }
}
