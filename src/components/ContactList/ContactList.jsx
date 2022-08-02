import { Container, Item, Button, Text } from './ContactList.module';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button onClick={() => onDeleteContact(id)}>Delete</Button>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.elementType.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
