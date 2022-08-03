import { Item, Button, Text } from '../ContactList.module';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Item key={id}>
        <Text>
          {name}: {number}
        </Text>
        <Button onClick={onDeleteContact}>Delete</Button>
      </Item>
    </>
  );
};
