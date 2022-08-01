import { Container, Item, Button, Text } from './ContactList.module';

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
