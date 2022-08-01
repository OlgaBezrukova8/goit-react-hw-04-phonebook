import { Label, Input, Container } from './Filter.module';

export const Filter = ({ value, onChange }) => (
  <Container>
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </Container>
);
