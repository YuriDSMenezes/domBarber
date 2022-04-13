import { Menu } from 'components/Menu';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 56px 20px;
  background: #1C1C1C;
  @media (min-width: 768px) {
    padding: 50px 60px;
    width: 100%;
    height: 100%;
  }
`;

const MainLayout: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>
    <Menu />
    {children}
  </Container>
);

export default MainLayout;
