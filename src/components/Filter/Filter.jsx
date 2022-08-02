import { Label, Input, Container } from './Filter.module';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <Container>
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </Container>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
