import { TitleSection } from './Title.module';
import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <>
    <TitleSection>{title}</TitleSection>
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
