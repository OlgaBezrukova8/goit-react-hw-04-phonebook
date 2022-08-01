import React, { Component } from 'react';
import { Container, Label, Input, Button } from './ContactForm.module';

export class ContactForm extends Component {
  render() {
    const { onChange, onSubmit } = this.props;

    return (
      <Container>
        <form onSubmit={onSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              onChange={onChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label>
            Number
            <Input
              onChange={onChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </form>
      </Container>
    );
  }
}
