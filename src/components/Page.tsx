import * as React from 'react';
import styled from 'react-emotion';
import '../static/css/App.css';
import { colors, dimensions } from '../styles/variables';

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: rem;
  color: ${colors.greyText};
`;

interface PageProps {
  className?: string;
}

const Page: React.SFC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;
