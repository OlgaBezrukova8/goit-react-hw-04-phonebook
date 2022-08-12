import { ContactItem } from './ContactItem/ContactItem';

import { Container } from './ContactList.module';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  const contactsMap = contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      onDeleteContact={() => onDeleteContact(id)}
    />
  ));

  return (
    <Container>
      <ul>{contactsMap}</ul>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
