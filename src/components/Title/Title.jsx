import {TitleSection} from './Title.module'

export const Title = ({ title, children }) => (
  <>
    <TitleSection>{title}</TitleSection>
    {children}
  </>
);
