import * as React from 'react';
import styled from 'react-emotion';
import { colors } from '../styles/variables';

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.black};
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
