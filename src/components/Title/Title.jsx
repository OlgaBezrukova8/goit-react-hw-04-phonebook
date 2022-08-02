import { TitleSection } from './Title.module';
import PropTypes from 'prop-types';

export const Title = ({ title, children }) => (
  <>
    <TitleSection>{title}</TitleSection>
    {children}
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
